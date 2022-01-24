import pandas as pd
import matplotlib.pyplot as plt
import pmdarima as pm
import numpy as np
import scipy.stats as stats
import warnings
warnings.filterwarnings("ignore")

n_predict=1

#leitura do CSV
col_list = ['Ano', 'Acidentes', 'Homicidios', 'Estupros', 'Roubos']
data = pd.read_csv("subprefeitura.csv", usecols=col_list)

#tratamento dos dados
#separa os dados e anos em listas distintas
ano = data['Ano']
acidente = data['Acidentes']
homicidio = data['Homicidios']
roubo = data['Roubos']
estupro = data['Estupros']
ano = ano.to_numpy()
acidente = acidente.to_numpy()
homicidio = homicidio.to_numpy()
roubo = roubo.to_numpy()
estupro = estupro.to_numpy()
shape = len(ano)

#cria a lista com as datas futuras, para casar com a previsão
ult_data = ano[-1]
anos_fut = list(range(2021, 2021+n_predict))
anos_fut.insert(0, ano[-1])

ls = [acidente, homicidio, roubo, estupro]
lsword = ["acidente", "homicidio", "roubo", "estupro"]

for num in range(0, 4):
    #cria o ARIMA
    info = ls[num]
    word = lsword[num]
    model = pm.auto_arima(info, seasonal=False)
    #cria a previsão
    forecasts, erro = model.predict(n_predict, return_conf_int=True, alpha=0.05)
    forecasts = forecasts.tolist()

    #plota as margens de confiança nos graficos de distribuição normal
    for n in range(n_predict):
        mu = forecasts[n]
        sigma = (erro[n][1] - forecasts[n])/1.96
        variance = pow(sigma, 2)
        x = np.linspace(mu - 3*sigma, mu + 3*sigma, 100)
        plt.plot(x, stats.norm.pdf(x, mu, sigma), label="Distribuição da probabilidade para "+word)
        plt.legend()
        plt.show()

    #coloca o ultimo ponto como o primeiro na previsao
    #junta no grafico os pontos, previstos com os dados
    print(erro)
    forecasts.insert(0, info[-1])
    #configura o plot
    x = np.arange(shape+n_predict)
    plt.plot(ano, info, c='blue', label=word)
    print(anos_fut)
    print(forecasts)
    print()
    plt.plot(anos_fut, forecasts, c='green', label='previsão')
    plt.legend()
    plt.show()
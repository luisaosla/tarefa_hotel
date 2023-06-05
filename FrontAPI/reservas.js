hotel = Hotel("Meu Hotel", [101, 102, 103, 201, 202, 203])

hotel.imprimir_quartos_disponiveis()

hotel.reservar_quarto(101)
hotel.reservar_quarto(201)
hotel.reservar_quarto(301)

hotel.imprimir_quartos_disponiveis()

hotel.liberar_quarto(101)
hotel.liberar_quarto(202)

hotel.imprimir_quartos_disponiveis()
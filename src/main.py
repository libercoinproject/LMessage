"""This module is for thread start."""
from lmessagemain import main
import state

if __name__ == '__main__':
    state.kivy = True
    print("Kivy Loading......")
    main()

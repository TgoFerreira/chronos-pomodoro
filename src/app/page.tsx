import '@/styles/theme.css';
import '@/styles/global.css';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { Menu } from '@/components/Menu';
import { Countdown } from '@/components/Countdown';
import { DefaultInput } from '@/components/DefaultInput';
import { Cycles } from '@/components/Cycles';
import { DefaultButton } from '@/components/DefaultButton';
import { CirclePlayIcon, PlayCircleIcon, StopCircleIcon } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Countdown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id=''
              type='text'
              labelText='task:'
              placeholder='Digite algo...'
              disabled
            />
          </div>
          <div className='formRow'>
            <p>Próximo ciclo é de x min</p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <DefaultButton icon={<StopCircleIcon />} color='red' />
          </div>
        </form>
        <div className='footer'>
          <a href=''>Entenda a técnica pomodoro 🍎</a>
          <a href=''>Chronos Pomodoro &copy; 2025 - Feito com 💚</a>
        </div>
      </Container>
    </>
  );
}

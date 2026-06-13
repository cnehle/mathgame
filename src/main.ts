import { GameUI } from './ui/GameUI';
import { CollectMode } from './ui/CollectMode';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  if (CollectMode.isRequested()) {
    new CollectMode();
  } else {
    new GameUI();
  }
});
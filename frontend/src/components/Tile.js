import React from "react";

function Tile({ puzzle, grid, handleChange }) {
  return (
    <table>
      <tbody>
        {grid.map((row, rowIndex) => {
          return (
            <tr
              key={rowIndex}
              clasName={(rowIndex + 1) % 3 === 0 ? "rborder" : ""}
            >
              {row.map((col, colIndex) => {
                return (
                  <td
                    key={rowIndex + colIndex}
                    className={(colIndex + 1) % 3 === 0 ? "cborder" : ""}
                  >
                    <input
                      className={
                        puzzle[rowIndex][colIndex] !== 0
                          ? "initial"
                          : col !== 0
                          ? "tile taken"
                          : "tile"
                      }
                      value={col === 0 ? "" : col}
                      key={rowIndex + " " + colIndex}
                      type="text"
                      onChange={(e) => handleChange(rowIndex, colIndex, e)}
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Tile;

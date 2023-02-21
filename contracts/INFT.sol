// SPDX-License-Identifier: MIT
// An example of a consumer contract that relies on a subscription for funding.
pragma solidity ^0.8.7;

interface IRandomNumber {
    function owner() external view returns (address);

    function requestRandomWords()
        external
        returns (uint256 requestId);

    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] memory _randomWords
    ) external;

    function getRequestStatus(
        uint256 _requestId
    )
        external
        view
        returns (uint256 paid, bool fulfilled, uint256[] memory randomWords);

}

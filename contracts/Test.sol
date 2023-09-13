// SPDX-License-Identifier: MIT

import "hardhat/console.sol";

contract Test {
    address constant sha256hash = address(0x2);

    function test1(bytes calldata param) public pure returns (bytes32) {
        return sha256(param);
    }

    function test2(bytes memory param) public returns (bytes32) {
        (bool ok, bytes memory res) = sha256hash.call(param);
        console.log(ok);
        console.logBytes(res);
        require(ok, "err");
        bytes32 result;
        assembly {
            result := mload(add(res, 32))
        }
        console.logBytes32(result);
        return result;
    }
    
}

/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { PresentedAddressScreened, _decode_PresentedAddressScreened, _encode_PresentedAddressScreened } from "../Addressing-Data-Elements-asn1-97/PresentedAddressScreened.ta.mjs";
// export { PresentedAddressScreened, _decode_PresentedAddressScreened, _encode_PresentedAddressScreened } from "../Addressing-Data-Elements-asn1-97/PresentedAddressScreened.ta.mjs";
import { AwaitConnect, _decode_AwaitConnect, _encode_AwaitConnect } from "../Single-Step-Call-Transfer-Operations-asn1-97/AwaitConnect.ta.mjs";
// export { AwaitConnect, _decode_AwaitConnect, _encode_AwaitConnect } from "../Single-Step-Call-Transfer-Operations-asn1-97/AwaitConnect.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { SSCTInitiateArg_argumentExtension, _decode_SSCTInitiateArg_argumentExtension, _encode_SSCTInitiateArg_argumentExtension } from "../Single-Step-Call-Transfer-Operations-asn1-97/SSCTInitiateArg-argumentExtension.ta.mjs";
// export { SSCTInitiateArg_argumentExtension, _decode_SSCTInitiateArg_argumentExtension, _encode_SSCTInitiateArg_argumentExtension } from "../Single-Step-Call-Transfer-Operations-asn1-97/SSCTInitiateArg-argumentExtension.ta.mjs";


/**
 * @summary SSCTInitiateArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSCTInitiateArg ::= SEQUENCE {
 *     rerouteingNumber PartyNumber, -- Transferred-To Number
 *     transferredAddress PresentedAddressScreened,
 *     awaitConnect AwaitConnect,
 *     transferredName [1] Name OPTIONAL,
 *     transferringAddress [2] PresentedAddressScreened OPTIONAL,
 *     transferringName [3] Name OPTIONAL,
 *     argumentExtension CHOICE {
 *         single [4] IMPLICIT Extension {{SSCTExtSet}},
 *         multiple [5] IMPLICIT SEQUENCE OF Extension {{SSCTExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SSCTInitiateArg {
    /**
     * @summary `rerouteingNumber`.
     * @public
     * @readonly
     */
    readonly rerouteingNumber: PartyNumber;
    /**
     * @summary `transferredAddress`.
     * @public
     * @readonly
     */
    readonly transferredAddress: PresentedAddressScreened;
    /**
     * @summary `awaitConnect`.
     * @public
     * @readonly
     */
    readonly awaitConnect: AwaitConnect;
    /**
     * @summary `transferredName`.
     * @public
     * @readonly
     */
    readonly transferredName: OPTIONAL<Name>;
    /**
     * @summary `transferringAddress`.
     * @public
     * @readonly
     */
    readonly transferringAddress: OPTIONAL<PresentedAddressScreened>;
    /**
     * @summary `transferringName`.
     * @public
     * @readonly
     */
    readonly transferringName: OPTIONAL<Name>;
    /**
     * @summary `argumentExtension`.
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<SSCTInitiateArg_argumentExtension>;

    constructor (
        rerouteingNumber: PartyNumber,
        transferredAddress: PresentedAddressScreened,
        awaitConnect: AwaitConnect,
        transferredName: OPTIONAL<Name>,
        transferringAddress: OPTIONAL<PresentedAddressScreened>,
        transferringName: OPTIONAL<Name>,
        argumentExtension: OPTIONAL<SSCTInitiateArg_argumentExtension>
    ) {
        this.rerouteingNumber = rerouteingNumber;
        this.transferredAddress = transferredAddress;
        this.awaitConnect = awaitConnect;
        this.transferredName = transferredName;
        this.transferringAddress = transferringAddress;
        this.transferringName = transferringName;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a SSCTInitiateArg
     * @description
     * 
     * This takes an `object` and converts it to a `SSCTInitiateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SSCTInitiateArg`.
     * @returns {SSCTInitiateArg}
     */
    public static _from_object (_o: { [_K in keyof (SSCTInitiateArg)]: (SSCTInitiateArg)[_K] }): SSCTInitiateArg {
        return new SSCTInitiateArg(_o.rerouteingNumber, _o.transferredAddress, _o.awaitConnect, _o.transferredName, _o.transferringAddress, _o.transferringName, _o.argumentExtension);
    }


}

/**
 * @summary The Leading Root Component Types of SSCTInitiateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SSCTInitiateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("rerouteingNumber", false, $.hasAnyTag),
    new $.ComponentSpec("transferredAddress", false, $.hasAnyTag),
    new $.ComponentSpec("awaitConnect", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("transferredName", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("transferringAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("transferringName", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5)))
];

/**
 * @summary The Trailing Root Component Types of SSCTInitiateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SSCTInitiateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SSCTInitiateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SSCTInitiateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SSCTInitiateArg: $.ASN1Decoder<SSCTInitiateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SSCTInitiateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SSCTInitiateArg (el: _Element): SSCTInitiateArg {
    if (!_cached_decoder_for_SSCTInitiateArg) { _cached_decoder_for_SSCTInitiateArg = function (el: _Element): SSCTInitiateArg {
    let rerouteingNumber!: PartyNumber;
    let transferredAddress!: PresentedAddressScreened;
    let awaitConnect!: AwaitConnect;
    let transferredName: OPTIONAL<Name>;
    let transferringAddress: OPTIONAL<PresentedAddressScreened>;
    let transferringName: OPTIONAL<Name>;
    let argumentExtension: OPTIONAL<SSCTInitiateArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "rerouteingNumber": (_el: _Element): void => { rerouteingNumber = _decode_PartyNumber(_el); },
        "transferredAddress": (_el: _Element): void => { transferredAddress = _decode_PresentedAddressScreened(_el); },
        "awaitConnect": (_el: _Element): void => { awaitConnect = _decode_AwaitConnect(_el); },
        "transferredName": (_el: _Element): void => { transferredName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "transferringAddress": (_el: _Element): void => { transferringAddress = $._decode_explicit<PresentedAddressScreened>(() => _decode_PresentedAddressScreened)(_el); },
        "transferringName": (_el: _Element): void => { transferringName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_SSCTInitiateArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SSCTInitiateArg,
        _extension_additions_list_spec_for_SSCTInitiateArg,
        _root_component_type_list_2_spec_for_SSCTInitiateArg,
        undefined,
    );
    return new SSCTInitiateArg(
        rerouteingNumber,
        transferredAddress,
        awaitConnect,
        transferredName,
        transferringAddress,
        transferringName,
        argumentExtension
    );
}; }
    return _cached_decoder_for_SSCTInitiateArg(el);
}

let _cached_encoder_for_SSCTInitiateArg: $.ASN1Encoder<SSCTInitiateArg> | null = null;

/**
 * @summary Encodes a(n) SSCTInitiateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SSCTInitiateArg, encoded as an ASN.1 Element.
 */
export
function _encode_SSCTInitiateArg (value: SSCTInitiateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SSCTInitiateArg) { _cached_encoder_for_SSCTInitiateArg = function (value: SSCTInitiateArg, elGetter: $.ASN1Encoder<SSCTInitiateArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.rerouteingNumber, $.BER));
    _components.push(/* REQUIRED   */ _encode_PresentedAddressScreened(value.transferredAddress, $.BER));
    _components.push(/* REQUIRED   */ _encode_AwaitConnect(value.awaitConnect, $.BER));
    if (value.transferredName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_Name, $.BER)(value.transferredName, $.BER));
    }
    if (value.transferringAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_PresentedAddressScreened, $.BER)(value.transferringAddress, $.BER));
    }
    if (value.transferringName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_Name, $.BER)(value.transferringName, $.BER));
    }
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SSCTInitiateArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SSCTInitiateArg(value, elGetter);
}


/* eslint-enable */

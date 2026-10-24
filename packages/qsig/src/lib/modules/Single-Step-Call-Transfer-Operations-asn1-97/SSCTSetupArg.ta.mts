/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PresentedAddressScreened, _decode_PresentedAddressScreened, _encode_PresentedAddressScreened } from "../Addressing-Data-Elements-asn1-97/PresentedAddressScreened.ta.mjs";
import { type Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { type SSCTSetupArg_argumentExtension, _decode_SSCTSetupArg_argumentExtension, _encode_SSCTSetupArg_argumentExtension } from "../Single-Step-Call-Transfer-Operations-asn1-97/SSCTSetupArg-argumentExtension.ta.mjs";

/**
 * @summary SSCTSetupArg
 * @description
 *
 * Argument of `ssctSetup`. Tells the Transferred-To PINX who User A
 * is, when that address or name was present in `ssctInitiate`. User B
 * is identified by the basic-call Calling party number and an optional
 * `callingName` invoke, not by this argument. ECMA-300 §6.5.2.1,
 * §6.5.4.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-300/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSCTSetupArg ::= SEQUENCE {
 *     transferringAddress [1] PresentedAddressScreened OPTIONAL,
 *     transferringName [2] Name OPTIONAL,
 *     argumentExtension CHOICE {
 *         single [3] IMPLICIT Extension {{SSCTExtSet}},
 *         multiple [4] IMPLICIT SEQUENCE OF Extension {{SSCTExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SSCTSetupArg {
    /**
     * @summary `transferringAddress`.
     * @description
     *
     * Address of User A, copied from `ssctInitiate` when that element
     * was present. ECMA-300 §6.5.2.1.
     * @public
     * @readonly
     */
    readonly transferringAddress: OPTIONAL<PresentedAddressScreened>;
    /**
     * @summary `transferringName`.
     * @description
     *
     * Name of User A, copied from `ssctInitiate` when that element was
     * present. ECMA-300 §6.5.2.1.
     * @public
     * @readonly
     */
    readonly transferringName: OPTIONAL<Name>;
    /**
     * @summary `argumentExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-300 §6.3.1 defines no
     * member of `SSCTExtSet`.
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<SSCTSetupArg_argumentExtension>;

    constructor (
        transferringAddress?: OPTIONAL<PresentedAddressScreened>,
        transferringName?: OPTIONAL<Name>,
        argumentExtension?: OPTIONAL<SSCTSetupArg_argumentExtension>
    ) {
        this.transferringAddress = transferringAddress;
        this.transferringName = transferringName;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a SSCTSetupArg
     * @description
     * 
     * This takes an `object` and converts it to a `SSCTSetupArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SSCTSetupArg`.
     * @returns {SSCTSetupArg}
     */
    public static _from_object (_o: { [_K in keyof (SSCTSetupArg)]: (SSCTSetupArg)[_K] }): SSCTSetupArg {
        return new SSCTSetupArg(_o.transferringAddress, _o.transferringName, _o.argumentExtension);
    }

}

/**
 * @summary The Leading Root Component Types of SSCTSetupArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SSCTSetupArg: $.ComponentSpec[] = [
    new $.ComponentSpec("transferringAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("transferringName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4)))
];

/**
 * @summary The Trailing Root Component Types of SSCTSetupArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SSCTSetupArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SSCTSetupArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SSCTSetupArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SSCTSetupArg: $.ASN1Decoder<SSCTSetupArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SSCTSetupArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SSCTSetupArg (el: _Element): SSCTSetupArg {
    if (!_cached_decoder_for_SSCTSetupArg) { _cached_decoder_for_SSCTSetupArg = function (el: _Element): SSCTSetupArg {
    let transferringAddress: OPTIONAL<PresentedAddressScreened>;
    let transferringName: OPTIONAL<Name>;
    let argumentExtension: OPTIONAL<SSCTSetupArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "transferringAddress": (_el: _Element): void => { transferringAddress = $._decode_explicit<PresentedAddressScreened>(() => _decode_PresentedAddressScreened)(_el); },
        "transferringName": (_el: _Element): void => { transferringName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_SSCTSetupArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SSCTSetupArg,
        _extension_additions_list_spec_for_SSCTSetupArg,
        _root_component_type_list_2_spec_for_SSCTSetupArg,
        undefined,
    );
    return new SSCTSetupArg(
        transferringAddress,
        transferringName,
        argumentExtension
    );
}; }
    return _cached_decoder_for_SSCTSetupArg(el);
}

let _cached_encoder_for_SSCTSetupArg: $.ASN1Encoder<SSCTSetupArg> | null = null;

/**
 * @summary Encodes a(n) SSCTSetupArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SSCTSetupArg, encoded as an ASN.1 Element.
 */
export
function _encode_SSCTSetupArg (value: SSCTSetupArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SSCTSetupArg) { _cached_encoder_for_SSCTSetupArg = function (value: SSCTSetupArg, _elGetter: $.ASN1Encoder<SSCTSetupArg>): _Element {
    const _components: _Element[] = [];
    if (value.transferringAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_PresentedAddressScreened, $.BER)(value.transferringAddress, $.BER));
    }
    if (value.transferringName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_Name, $.BER)(value.transferringName, $.BER));
    }
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SSCTSetupArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SSCTSetupArg(value, elGetter);
}

/* eslint-enable */

/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SmsDeliverResChoice, _decode_SmsDeliverResChoice, _encode_SmsDeliverResChoice } from "../Short-Message-Service-Operations-asn1-97/SmsDeliverResChoice.ta.mjs";
import { SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";

/**
 * @summary SmsDeliverRes
 * @description
 *
 * Result of `smsDeliver` (ECMA-325 Annex E.5). The choice carries neither,
 * one, or both of `protocolIdentifier` and `userData`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsDeliverRes ::= SEQUENCE {
 *     smsDeliverResponseChoice SmsDeliverResChoice,
 *     smsExtension SmsExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SmsDeliverRes {
    /**
     * @summary `smsDeliverResponseChoice`.
     * @description
     *
     * Nothing (`null`), only the protocol identifier, only user data, or both
     * (ECMA-325 §E.5).
     * @public
     * @readonly
     */
    readonly smsDeliverResponseChoice: SmsDeliverResChoice;
    /**
     * @summary `smsExtension`.
     * @description
     *
     * Manufacturer-specific extension. This edition defines none in `SmsExtSet`
     * (ECMA-325 §6.3.1).
     * @public
     * @readonly
     */
    readonly smsExtension: OPTIONAL<SmsExtension>;

    constructor (
        smsDeliverResponseChoice: SmsDeliverResChoice,
        smsExtension?: OPTIONAL<SmsExtension>
    ) {
        this.smsDeliverResponseChoice = smsDeliverResponseChoice;
        this.smsExtension = smsExtension;
    }

    /**
     * @summary Restructures an object into a SmsDeliverRes
     * @description
     * 
     * This takes an `object` and converts it to a `SmsDeliverRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SmsDeliverRes`.
     * @returns {SmsDeliverRes}
     */
    public static _from_object (_o: { [_K in keyof (SmsDeliverRes)]: (SmsDeliverRes)[_K] }): SmsDeliverRes {
        return new SmsDeliverRes(_o.smsDeliverResponseChoice, _o.smsExtension);
    }

}

/**
 * @summary The Leading Root Component Types of SmsDeliverRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SmsDeliverRes: $.ComponentSpec[] = [
    new $.ComponentSpec("smsDeliverResponseChoice", false, $.hasAnyTag),
    new $.ComponentSpec("smsExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of SmsDeliverRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SmsDeliverRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SmsDeliverRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SmsDeliverRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SmsDeliverRes: $.ASN1Decoder<SmsDeliverRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SmsDeliverRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SmsDeliverRes (el: _Element): SmsDeliverRes {
    if (!_cached_decoder_for_SmsDeliverRes) { _cached_decoder_for_SmsDeliverRes = function (el: _Element): SmsDeliverRes {
    let smsDeliverResponseChoice!: SmsDeliverResChoice;
    let smsExtension: OPTIONAL<SmsExtension>;
    const callbacks: $.DecodingMap = {
        "smsDeliverResponseChoice": (_el: _Element): void => { smsDeliverResponseChoice = _decode_SmsDeliverResChoice(_el); },
        "smsExtension": (_el: _Element): void => { smsExtension = _decode_SmsExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SmsDeliverRes,
        _extension_additions_list_spec_for_SmsDeliverRes,
        _root_component_type_list_2_spec_for_SmsDeliverRes,
        undefined,
    );
    return new SmsDeliverRes(
        smsDeliverResponseChoice,
        smsExtension
    );
}; }
    return _cached_decoder_for_SmsDeliverRes(el);
}

let _cached_encoder_for_SmsDeliverRes: $.ASN1Encoder<SmsDeliverRes> | null = null;

/**
 * @summary Encodes a(n) SmsDeliverRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmsDeliverRes, encoded as an ASN.1 Element.
 */
export
function _encode_SmsDeliverRes (value: SmsDeliverRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SmsDeliverRes) { _cached_encoder_for_SmsDeliverRes = function (value: SmsDeliverRes, _elGetter: $.ASN1Encoder<SmsDeliverRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_SmsDeliverResChoice(value.smsDeliverResponseChoice, $.BER));
    if (value.smsExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SmsExtension(value.smsExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SmsDeliverRes(value, elGetter);
}

/* eslint-enable */

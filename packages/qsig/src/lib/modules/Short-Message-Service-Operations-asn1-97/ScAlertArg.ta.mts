/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";

/**
 * @summary ScAlertArg
 * @description
 *
 * Argument of `scAlert` (ECMA-325 §6.3.1, §6.5.4.2). Sent to each Service
 * Centre stored in Short Message Waiting Data.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScAlertArg ::= SEQUENCE {
 *     originatingAddress PartyNumber,
 *     smsExtension SmsExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ScAlertArg {
    /**
     * @summary `originatingAddress`.
     * @description
     *
     * Party number of the Receiving User who can take Short Messages again
     * (ECMA-325 §6.5.4.2, §6.5.5.2).
     * @public
     * @readonly
     */
    readonly originatingAddress: PartyNumber;
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
        originatingAddress: PartyNumber,
        smsExtension: OPTIONAL<SmsExtension>
    ) {
        this.originatingAddress = originatingAddress;
        this.smsExtension = smsExtension;
    }

    /**
     * @summary Restructures an object into a ScAlertArg
     * @description
     * 
     * This takes an `object` and converts it to a `ScAlertArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScAlertArg`.
     * @returns {ScAlertArg}
     */
    public static _from_object (_o: { [_K in keyof (ScAlertArg)]: (ScAlertArg)[_K] }): ScAlertArg {
        return new ScAlertArg(_o.originatingAddress, _o.smsExtension);
    }

}

/**
 * @summary The Leading Root Component Types of ScAlertArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ScAlertArg: $.ComponentSpec[] = [
    new $.ComponentSpec("originatingAddress", false, $.hasAnyTag),
    new $.ComponentSpec("smsExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of ScAlertArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ScAlertArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ScAlertArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ScAlertArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ScAlertArg: $.ASN1Decoder<ScAlertArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScAlertArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScAlertArg (el: _Element): ScAlertArg {
    if (!_cached_decoder_for_ScAlertArg) { _cached_decoder_for_ScAlertArg = function (el: _Element): ScAlertArg {
    let originatingAddress!: PartyNumber;
    let smsExtension: OPTIONAL<SmsExtension>;
    const callbacks: $.DecodingMap = {
        "originatingAddress": (_el: _Element): void => { originatingAddress = _decode_PartyNumber(_el); },
        "smsExtension": (_el: _Element): void => { smsExtension = _decode_SmsExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ScAlertArg,
        _extension_additions_list_spec_for_ScAlertArg,
        _root_component_type_list_2_spec_for_ScAlertArg,
        undefined,
    );
    return new ScAlertArg(
        originatingAddress,
        smsExtension
    );
}; }
    return _cached_decoder_for_ScAlertArg(el);
}

let _cached_encoder_for_ScAlertArg: $.ASN1Encoder<ScAlertArg> | null = null;

/**
 * @summary Encodes a(n) ScAlertArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScAlertArg, encoded as an ASN.1 Element.
 */
export
function _encode_ScAlertArg (value: ScAlertArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScAlertArg) { _cached_encoder_for_ScAlertArg = function (value: ScAlertArg, _elGetter: $.ASN1Encoder<ScAlertArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.originatingAddress, $.BER));
    if (value.smsExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SmsExtension(value.smsExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ScAlertArg(value, elGetter);
}

/* eslint-enable */

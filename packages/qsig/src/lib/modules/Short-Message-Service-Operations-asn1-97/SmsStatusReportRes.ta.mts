/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SmsStatusReportResponseChoice, _decode_SmsStatusReportResponseChoice, _encode_SmsStatusReportResponseChoice } from "../Short-Message-Service-Operations-asn1-97/SmsStatusReportResponseChoice.ta.mjs";
// export { SmsStatusReportResponseChoice, _decode_SmsStatusReportResponseChoice, _encode_SmsStatusReportResponseChoice } from "../Short-Message-Service-Operations-asn1-97/SmsStatusReportResponseChoice.ta.mjs";
import { SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";
// export { SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";


/**
 * @summary SmsStatusReportRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsStatusReportRes ::= SEQUENCE {
 *     smsStatusReportResponseChoice SmsStatusReportResponseChoice,
 *     smsExtension SmsExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SmsStatusReportRes {
    /**
     * @summary `smsStatusReportResponseChoice`.
     * @public
     * @readonly
     */
    readonly smsStatusReportResponseChoice: SmsStatusReportResponseChoice;
    /**
     * @summary `smsExtension`.
     * @public
     * @readonly
     */
    readonly smsExtension: OPTIONAL<SmsExtension>;

    constructor (
        smsStatusReportResponseChoice: SmsStatusReportResponseChoice,
        smsExtension: OPTIONAL<SmsExtension>
    ) {
        this.smsStatusReportResponseChoice = smsStatusReportResponseChoice;
        this.smsExtension = smsExtension;
    }

    /**
     * @summary Restructures an object into a SmsStatusReportRes
     * @description
     * 
     * This takes an `object` and converts it to a `SmsStatusReportRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SmsStatusReportRes`.
     * @returns {SmsStatusReportRes}
     */
    public static _from_object (_o: { [_K in keyof (SmsStatusReportRes)]: (SmsStatusReportRes)[_K] }): SmsStatusReportRes {
        return new SmsStatusReportRes(_o.smsStatusReportResponseChoice, _o.smsExtension);
    }


}

/**
 * @summary The Leading Root Component Types of SmsStatusReportRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SmsStatusReportRes: $.ComponentSpec[] = [
    new $.ComponentSpec("smsStatusReportResponseChoice", false, $.hasAnyTag),
    new $.ComponentSpec("smsExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of SmsStatusReportRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SmsStatusReportRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SmsStatusReportRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SmsStatusReportRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SmsStatusReportRes: $.ASN1Decoder<SmsStatusReportRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SmsStatusReportRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SmsStatusReportRes (el: _Element): SmsStatusReportRes {
    if (!_cached_decoder_for_SmsStatusReportRes) { _cached_decoder_for_SmsStatusReportRes = function (el: _Element): SmsStatusReportRes {
    let smsStatusReportResponseChoice!: SmsStatusReportResponseChoice;
    let smsExtension: OPTIONAL<SmsExtension>;
    const callbacks: $.DecodingMap = {
        "smsStatusReportResponseChoice": (_el: _Element): void => { smsStatusReportResponseChoice = _decode_SmsStatusReportResponseChoice(_el); },
        "smsExtension": (_el: _Element): void => { smsExtension = _decode_SmsExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SmsStatusReportRes,
        _extension_additions_list_spec_for_SmsStatusReportRes,
        _root_component_type_list_2_spec_for_SmsStatusReportRes,
        undefined,
    );
    return new SmsStatusReportRes(
        smsStatusReportResponseChoice,
        smsExtension
    );
}; }
    return _cached_decoder_for_SmsStatusReportRes(el);
}

let _cached_encoder_for_SmsStatusReportRes: $.ASN1Encoder<SmsStatusReportRes> | null = null;

/**
 * @summary Encodes a(n) SmsStatusReportRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmsStatusReportRes, encoded as an ASN.1 Element.
 */
export
function _encode_SmsStatusReportRes (value: SmsStatusReportRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SmsStatusReportRes) { _cached_encoder_for_SmsStatusReportRes = function (value: SmsStatusReportRes, elGetter: $.ASN1Encoder<SmsStatusReportRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_SmsStatusReportResponseChoice(value.smsStatusReportResponseChoice, $.BER));
    if (value.smsExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SmsExtension(value.smsExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SmsStatusReportRes(value, elGetter);
}


/* eslint-enable */

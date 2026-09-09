/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CDRCrossRefID, _decode_CDRCrossRefID, _encode_CDRCrossRefID } from "../CSTA-call-detail-record/CDRCrossRefID.ta.mjs";

import { CDRTimePeriod, _decode_CDRTimePeriod, _encode_CDRTimePeriod } from "../CSTA-call-detail-record/CDRTimePeriod.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SendStoredCDRArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendStoredCDRArgument ::= SEQUENCE
 * {    cdrCrossRefID            CDRCrossRefID,              --corrected 06/2001
 *     timePeriod            CDRTimePeriod                OPTIONAL,
 *     extensions            CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SendStoredCDRArgument {
    constructor (
        /**
         * @summary `cdrCrossRefID`.
         * @public
         * @readonly
         */
        readonly cdrCrossRefID: CDRCrossRefID,
        /**
         * @summary `timePeriod`.
         * @public
         * @readonly
         */
        readonly timePeriod: OPTIONAL<CDRTimePeriod>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SendStoredCDRArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SendStoredCDRArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendStoredCDRArgument`.
     * @returns {SendStoredCDRArgument}
     */
    public static _from_object (_o: { [_K in keyof (SendStoredCDRArgument)]: (SendStoredCDRArgument)[_K] }): SendStoredCDRArgument {
        return new SendStoredCDRArgument(_o.cdrCrossRefID, _o.timePeriod, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SendStoredCDRArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendStoredCDRArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("cdrCrossRefID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("timePeriod", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SendStoredCDRArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendStoredCDRArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendStoredCDRArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendStoredCDRArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendStoredCDRArgument: $.ASN1Decoder<SendStoredCDRArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendStoredCDRArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendStoredCDRArgument (el: _Element): SendStoredCDRArgument {
    if (!_cached_decoder_for_SendStoredCDRArgument) { _cached_decoder_for_SendStoredCDRArgument = function (el: _Element): SendStoredCDRArgument {
    let cdrCrossRefID!: CDRCrossRefID;
    let timePeriod: OPTIONAL<CDRTimePeriod>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "cdrCrossRefID": (_el: _Element): void => { cdrCrossRefID = _decode_CDRCrossRefID(_el); },
        "timePeriod": (_el: _Element): void => { timePeriod = _decode_CDRTimePeriod(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendStoredCDRArgument,
        _extension_additions_list_spec_for_SendStoredCDRArgument,
        _root_component_type_list_2_spec_for_SendStoredCDRArgument,
        undefined,
    );
    return new SendStoredCDRArgument(
        cdrCrossRefID,
        timePeriod,
        extensions
    );
}; }
    return _cached_decoder_for_SendStoredCDRArgument(el);
}

let _cached_encoder_for_SendStoredCDRArgument: $.ASN1Encoder<SendStoredCDRArgument> | null = null;

/**
 * @summary Encodes a(n) SendStoredCDRArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendStoredCDRArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SendStoredCDRArgument (value: SendStoredCDRArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendStoredCDRArgument) { _cached_encoder_for_SendStoredCDRArgument = function (value: SendStoredCDRArgument, elGetter: $.ASN1Encoder<SendStoredCDRArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CDRCrossRefID(value.cdrCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.timePeriod === undefined) ? undefined : _encode_CDRTimePeriod(value.timePeriod, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendStoredCDRArgument(value, elGetter);
}


/* eslint-enable */

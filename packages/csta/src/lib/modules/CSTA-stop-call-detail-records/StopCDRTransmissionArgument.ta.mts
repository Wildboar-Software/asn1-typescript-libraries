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

import {
    CDRTermReason,
    _enum_for_CDRTermReason,
    _decode_CDRTermReason,
    _encode_CDRTermReason
} from "../CSTA-call-detail-record/CDRTermReason.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary StopCDRTransmissionArgument
 * @description
 *
 * CDR session and optional termination reason (ECMA-269 §27.1.5.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopCDRTransmissionArgument ::= SEQUENCE
 * {    cdrCrossRefID            CDRCrossRefID,           --corrected 06/2001
 *     cdrTermReason            CDRTermReason                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StopCDRTransmissionArgument {
    constructor (
        /**
         * @summary `cdrCrossRefID`.
         * @description
         *
         * CDR transmission cross-reference from Start Call Detail Records
         * Transmission (ECMA-269 §27.1.4).
         *
         * @public
         * @readonly
         */
        readonly cdrCrossRefID: CDRCrossRefID,
        /**
         * @summary `cdrTermReason`.
         * @description
         *
         * endOfDataDetected, errorDetected, thresholdReached, or other. Shall
         * not be provided when the computing function sends this service
         * (ECMA-269 §27.1.5.1).
         *
         * @public
         * @readonly
         */
        readonly cdrTermReason: OPTIONAL<CDRTermReason>,
        /**
         * @summary `extensions`.
         * @description
         *
         * CSTACommonArguments carrying the service-table security and
         * privateData parameters.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a StopCDRTransmissionArgument
     * @description
     * 
     * This takes an `object` and converts it to a `StopCDRTransmissionArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StopCDRTransmissionArgument`.
     * @returns {StopCDRTransmissionArgument}
     */
    public static _from_object (_o: { [_K in keyof (StopCDRTransmissionArgument)]: (StopCDRTransmissionArgument)[_K] }): StopCDRTransmissionArgument {
        return new StopCDRTransmissionArgument(_o.cdrCrossRefID, _o.cdrTermReason, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cdrTermReason`
         * @public
         * @static
         */

    public static _enum_for_cdrTermReason = _enum_for_CDRTermReason;
}

/**
 * @summary The Leading Root Component Types of StopCDRTransmissionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StopCDRTransmissionArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("cdrCrossRefID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("cdrTermReason", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of StopCDRTransmissionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StopCDRTransmissionArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StopCDRTransmissionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StopCDRTransmissionArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StopCDRTransmissionArgument: $.ASN1Decoder<StopCDRTransmissionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopCDRTransmissionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopCDRTransmissionArgument (el: _Element): StopCDRTransmissionArgument {
    if (!_cached_decoder_for_StopCDRTransmissionArgument) { _cached_decoder_for_StopCDRTransmissionArgument = function (el: _Element): StopCDRTransmissionArgument {
    let cdrCrossRefID!: CDRCrossRefID;
    let cdrTermReason: OPTIONAL<CDRTermReason>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "cdrCrossRefID": (_el: _Element): void => { cdrCrossRefID = _decode_CDRCrossRefID(_el); },
        "cdrTermReason": (_el: _Element): void => { cdrTermReason = _decode_CDRTermReason(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StopCDRTransmissionArgument,
        _extension_additions_list_spec_for_StopCDRTransmissionArgument,
        _root_component_type_list_2_spec_for_StopCDRTransmissionArgument,
        undefined,
    );
    return new StopCDRTransmissionArgument(
        cdrCrossRefID,
        cdrTermReason,
        extensions
    );
}; }
    return _cached_decoder_for_StopCDRTransmissionArgument(el);
}

let _cached_encoder_for_StopCDRTransmissionArgument: $.ASN1Encoder<StopCDRTransmissionArgument> | null = null;

/**
 * @summary Encodes a(n) StopCDRTransmissionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopCDRTransmissionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_StopCDRTransmissionArgument (value: StopCDRTransmissionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopCDRTransmissionArgument) { _cached_encoder_for_StopCDRTransmissionArgument = function (value: StopCDRTransmissionArgument, elGetter: $.ASN1Encoder<StopCDRTransmissionArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CDRCrossRefID(value.cdrCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.cdrTermReason === undefined) ? undefined : _encode_CDRTermReason(value.cdrTermReason, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StopCDRTransmissionArgument(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CDRCrossRefID, _decode_CDRCrossRefID, _encode_CDRCrossRefID } from "../CSTA-call-detail-record/CDRCrossRefID.ta.mjs";

import { CDRInfo, _decode_CDRInfo, _encode_CDRInfo } from "../CSTA-call-detail-record/CDRInfo.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary CDRReportArgument
 * @description
 *
 * One to 128 records in `cdrInfo`, plus whether this is the last stored report
 * (ECMA-269 §27.1.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRReportArgument ::= SEQUENCE
 * {    cdrCrossRefID            CDRCrossRefID,           --corrected 06/2001
 *     numberOfRecordsSent        INTEGER (1..128),
 *     cdrInfo                CDRInfo,
 *     lastStoredCDRReportSent        BOOLEAN                    OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CDRReportArgument {
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
         * @summary `numberOfRecordsSent`.
         * @description
         *
         * Count of records in this report, 1..128 (ECMA-269 §27.1.2.1).
         *
         * @public
         * @readonly
         */
        readonly numberOfRecordsSent: INTEGER,
        /**
         * @summary `cdrInfo`.
         * @description
         *
         * CDR payload. Structure is defined in the call-detail-record module
         * (ECMA-269 §27.1.2.1).
         *
         * @public
         * @readonly
         */
        readonly cdrInfo: CDRInfo,
        /**
         * @summary `lastStoredCDRReportSent`.
         * @description
         *
         * Present only after Send Stored Call Detail Records: TRUE if this is
         * the last stored report (further CDRs are stored until another Send
         * Stored); FALSE if more stored reports will follow (ECMA-269
         * §27.1.2.1).
         *
         * @public
         * @readonly
         */
        readonly lastStoredCDRReportSent: OPTIONAL<BOOLEAN>,
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
     * @summary Restructures an object into a CDRReportArgument
     * @description
     * 
     * This takes an `object` and converts it to a `CDRReportArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CDRReportArgument`.
     * @returns {CDRReportArgument}
     */
    public static _from_object (_o: { [_K in keyof (CDRReportArgument)]: (CDRReportArgument)[_K] }): CDRReportArgument {
        return new CDRReportArgument(_o.cdrCrossRefID, _o.numberOfRecordsSent, _o.cdrInfo, _o.lastStoredCDRReportSent, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of CDRReportArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CDRReportArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("cdrCrossRefID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("numberOfRecordsSent", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("cdrInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("lastStoredCDRReportSent", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of CDRReportArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CDRReportArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CDRReportArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CDRReportArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CDRReportArgument: $.ASN1Decoder<CDRReportArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CDRReportArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CDRReportArgument (el: _Element): CDRReportArgument {
    if (!_cached_decoder_for_CDRReportArgument) { _cached_decoder_for_CDRReportArgument = function (el: _Element): CDRReportArgument {
    let cdrCrossRefID!: CDRCrossRefID;
    let numberOfRecordsSent!: INTEGER;
    let cdrInfo!: CDRInfo;
    let lastStoredCDRReportSent: OPTIONAL<BOOLEAN>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "cdrCrossRefID": (_el: _Element): void => { cdrCrossRefID = _decode_CDRCrossRefID(_el); },
        "numberOfRecordsSent": (_el: _Element): void => { numberOfRecordsSent = $._decodeInteger(_el); },
        "cdrInfo": (_el: _Element): void => { cdrInfo = _decode_CDRInfo(_el); },
        "lastStoredCDRReportSent": (_el: _Element): void => { lastStoredCDRReportSent = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CDRReportArgument,
        _extension_additions_list_spec_for_CDRReportArgument,
        _root_component_type_list_2_spec_for_CDRReportArgument,
        undefined,
    );
    return new CDRReportArgument(
        cdrCrossRefID,
        numberOfRecordsSent,
        cdrInfo,
        lastStoredCDRReportSent,
        extensions
    );
}; }
    return _cached_decoder_for_CDRReportArgument(el);
}

let _cached_encoder_for_CDRReportArgument: $.ASN1Encoder<CDRReportArgument> | null = null;

/**
 * @summary Encodes a(n) CDRReportArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CDRReportArgument, encoded as an ASN.1 Element.
 */
export
function _encode_CDRReportArgument (value: CDRReportArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CDRReportArgument) { _cached_encoder_for_CDRReportArgument = function (value: CDRReportArgument, elGetter: $.ASN1Encoder<CDRReportArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CDRCrossRefID(value.cdrCrossRefID, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.numberOfRecordsSent, $.BER),
            /* REQUIRED   */ _encode_CDRInfo(value.cdrInfo, $.BER),
            /* IF_ABSENT  */ ((value.lastStoredCDRReportSent === undefined) ? undefined : $._encodeBoolean(value.lastStoredCDRReportSent, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CDRReportArgument(value, elGetter);
}


/* eslint-enable */

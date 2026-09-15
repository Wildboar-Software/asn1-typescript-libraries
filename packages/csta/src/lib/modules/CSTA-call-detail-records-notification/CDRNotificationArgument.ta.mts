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
    CDRReason,
    _enum_for_CDRReason,
    _decode_CDRReason,
    _encode_CDRReason
} from "../CSTA-call-detail-record/CDRReason.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary CDRNotificationArgument
 * @description
 *
 * CDR session and optional reason (ECMA-269 §27.1.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRNotificationArgument ::= SEQUENCE
 * {    cdrCrossRefID            CDRCrossRefID,
 *     cdrReason            CDRReason                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CDRNotificationArgument {
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
         * @summary `cdrReason`.
         * @description
         *
         * Why the notification is sent, when provided (ECMA-269 §27.1.1.1).
         *
         * @public
         * @readonly
         */
        readonly cdrReason: OPTIONAL<CDRReason>,
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
     * @summary Restructures an object into a CDRNotificationArgument
     * @description
     * 
     * This takes an `object` and converts it to a `CDRNotificationArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CDRNotificationArgument`.
     * @returns {CDRNotificationArgument}
     */
    public static _from_object (_o: { [_K in keyof (CDRNotificationArgument)]: (CDRNotificationArgument)[_K] }): CDRNotificationArgument {
        return new CDRNotificationArgument(_o.cdrCrossRefID, _o.cdrReason, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cdrReason`
         * @public
         * @static
         */

    public static _enum_for_cdrReason = _enum_for_CDRReason;
}

/**
 * @summary The Leading Root Component Types of CDRNotificationArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CDRNotificationArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("cdrCrossRefID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("cdrReason", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of CDRNotificationArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CDRNotificationArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CDRNotificationArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CDRNotificationArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CDRNotificationArgument: $.ASN1Decoder<CDRNotificationArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CDRNotificationArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CDRNotificationArgument (el: _Element): CDRNotificationArgument {
    if (!_cached_decoder_for_CDRNotificationArgument) { _cached_decoder_for_CDRNotificationArgument = function (el: _Element): CDRNotificationArgument {
    let cdrCrossRefID!: CDRCrossRefID;
    let cdrReason: OPTIONAL<CDRReason>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "cdrCrossRefID": (_el: _Element): void => { cdrCrossRefID = _decode_CDRCrossRefID(_el); },
        "cdrReason": (_el: _Element): void => { cdrReason = _decode_CDRReason(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CDRNotificationArgument,
        _extension_additions_list_spec_for_CDRNotificationArgument,
        _root_component_type_list_2_spec_for_CDRNotificationArgument,
        undefined,
    );
    return new CDRNotificationArgument(
        cdrCrossRefID,
        cdrReason,
        extensions
    );
}; }
    return _cached_decoder_for_CDRNotificationArgument(el);
}

let _cached_encoder_for_CDRNotificationArgument: $.ASN1Encoder<CDRNotificationArgument> | null = null;

/**
 * @summary Encodes a(n) CDRNotificationArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CDRNotificationArgument, encoded as an ASN.1 Element.
 */
export
function _encode_CDRNotificationArgument (value: CDRNotificationArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CDRNotificationArgument) { _cached_encoder_for_CDRNotificationArgument = function (value: CDRNotificationArgument, elGetter: $.ASN1Encoder<CDRNotificationArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CDRCrossRefID(value.cdrCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.cdrReason === undefined) ? undefined : _encode_CDRReason(value.cdrReason, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CDRNotificationArgument(value, elGetter);
}


/* eslint-enable */

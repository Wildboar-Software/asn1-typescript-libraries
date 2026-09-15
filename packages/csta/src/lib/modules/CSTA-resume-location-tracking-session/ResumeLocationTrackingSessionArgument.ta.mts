/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { LocCrossRefID, _decode_LocCrossRefID, _encode_LocCrossRefID } from "../CSTA-device-feature-types/LocCrossRefID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ResumeLocationTrackingSessionArgument
 * @description
 *
 * Session to resume (ECMA-269 §28.1.5.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResumeLocationTrackingSessionArgument ::= SEQUENCE
 * {    locCrossRefID            LocCrossRefID,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ResumeLocationTrackingSessionArgument {
    constructor (
        /**
         * @summary `locCrossRefID`.
         * @description
         *
         * Identifies the location tracking session (ECMA-269 §6.8.4).
         *
         * @public
         * @readonly
         */
        readonly locCrossRefID: LocCrossRefID,
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
     * @summary Restructures an object into a ResumeLocationTrackingSessionArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ResumeLocationTrackingSessionArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResumeLocationTrackingSessionArgument`.
     * @returns {ResumeLocationTrackingSessionArgument}
     */
    public static _from_object (_o: { [_K in keyof (ResumeLocationTrackingSessionArgument)]: (ResumeLocationTrackingSessionArgument)[_K] }): ResumeLocationTrackingSessionArgument {
        return new ResumeLocationTrackingSessionArgument(_o.locCrossRefID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ResumeLocationTrackingSessionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResumeLocationTrackingSessionArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("locCrossRefID", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ResumeLocationTrackingSessionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResumeLocationTrackingSessionArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResumeLocationTrackingSessionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResumeLocationTrackingSessionArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResumeLocationTrackingSessionArgument: $.ASN1Decoder<ResumeLocationTrackingSessionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResumeLocationTrackingSessionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResumeLocationTrackingSessionArgument (el: _Element): ResumeLocationTrackingSessionArgument {
    if (!_cached_decoder_for_ResumeLocationTrackingSessionArgument) { _cached_decoder_for_ResumeLocationTrackingSessionArgument = function (el: _Element): ResumeLocationTrackingSessionArgument {
    let locCrossRefID!: LocCrossRefID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "locCrossRefID": (_el: _Element): void => { locCrossRefID = _decode_LocCrossRefID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResumeLocationTrackingSessionArgument,
        _extension_additions_list_spec_for_ResumeLocationTrackingSessionArgument,
        _root_component_type_list_2_spec_for_ResumeLocationTrackingSessionArgument,
        undefined,
    );
    return new ResumeLocationTrackingSessionArgument(
        locCrossRefID,
        extensions
    );
}; }
    return _cached_decoder_for_ResumeLocationTrackingSessionArgument(el);
}

let _cached_encoder_for_ResumeLocationTrackingSessionArgument: $.ASN1Encoder<ResumeLocationTrackingSessionArgument> | null = null;

/**
 * @summary Encodes a(n) ResumeLocationTrackingSessionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResumeLocationTrackingSessionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ResumeLocationTrackingSessionArgument (value: ResumeLocationTrackingSessionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResumeLocationTrackingSessionArgument) { _cached_encoder_for_ResumeLocationTrackingSessionArgument = function (value: ResumeLocationTrackingSessionArgument, elGetter: $.ASN1Encoder<ResumeLocationTrackingSessionArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LocCrossRefID(value.locCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ResumeLocationTrackingSessionArgument(value, elGetter);
}


/* eslint-enable */

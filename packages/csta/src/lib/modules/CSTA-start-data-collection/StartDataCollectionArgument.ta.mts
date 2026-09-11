/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CallObject, _decode_CallObject, _encode_CallObject } from "../CSTA-start-data-collection/CallObject.ta.mjs";

import {
    DataCollType,
    _enum_for_DataCollType,
    _decode_DataCollType,
    _encode_DataCollType
} from "../CSTA-start-data-collection/DataCollType.ta.mjs";

import { DigitsReportingCriteria, _decode_DigitsReportingCriteria, _encode_DigitsReportingCriteria } from "../CSTA-start-data-collection/DigitsReportingCriteria.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary StartDataCollectionArgument
 * @description
 *
 * Target object, collection type, and digit reporting criteria (ECMA-269
 * §25.1.5.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartDataCollectionArgument ::= SEQUENCE
 * {    object                CallObject,
 *     dataCollType            DataCollType                OPTIONAL,
 *     digitsReportingCriteria        DigitsReportingCriteria            OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StartDataCollectionArgument {
    constructor (
        /**
         * @summary `object`.
         * @description
         *
         * Device (next connection) or specific connection (ECMA-269 §25.1.5.1).
         *
         * @public
         * @readonly
         */
        readonly object: CallObject,
        /**
         * @summary `dataCollType`.
         * @description
         *
         * Digits or telephony tones (ECMA-269 §25.1.5.1).
         *
         * @public
         * @readonly
         */
        readonly dataCollType: OPTIONAL<DataCollType>,
        /**
         * @summary `digitsReportingCriteria`.
         * @description
         *
         * Only when `dataCollType` is digits (ECMA-269 §25.1.5.1).
         *
         * @public
         * @readonly
         */
        readonly digitsReportingCriteria: OPTIONAL<DigitsReportingCriteria>,
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
     * @summary Restructures an object into a StartDataCollectionArgument
     * @description
     * 
     * This takes an `object` and converts it to a `StartDataCollectionArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartDataCollectionArgument`.
     * @returns {StartDataCollectionArgument}
     */
    public static _from_object (_o: { [_K in keyof (StartDataCollectionArgument)]: (StartDataCollectionArgument)[_K] }): StartDataCollectionArgument {
        return new StartDataCollectionArgument(_o.object, _o.dataCollType, _o.digitsReportingCriteria, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `dataCollType`
         * @public
         * @static
         */

    public static _enum_for_dataCollType = _enum_for_DataCollType;
}

/**
 * @summary The Leading Root Component Types of StartDataCollectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartDataCollectionArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("object", false, $.hasAnyTag),
    new $.ComponentSpec("dataCollType", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("digitsReportingCriteria", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of StartDataCollectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartDataCollectionArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartDataCollectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartDataCollectionArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartDataCollectionArgument: $.ASN1Decoder<StartDataCollectionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartDataCollectionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartDataCollectionArgument (el: _Element): StartDataCollectionArgument {
    if (!_cached_decoder_for_StartDataCollectionArgument) { _cached_decoder_for_StartDataCollectionArgument = function (el: _Element): StartDataCollectionArgument {
    let object!: CallObject;
    let dataCollType: OPTIONAL<DataCollType>;
    let digitsReportingCriteria: OPTIONAL<DigitsReportingCriteria>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "object": (_el: _Element): void => { object = _decode_CallObject(_el); },
        "dataCollType": (_el: _Element): void => { dataCollType = _decode_DataCollType(_el); },
        "digitsReportingCriteria": (_el: _Element): void => { digitsReportingCriteria = _decode_DigitsReportingCriteria(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartDataCollectionArgument,
        _extension_additions_list_spec_for_StartDataCollectionArgument,
        _root_component_type_list_2_spec_for_StartDataCollectionArgument,
        undefined,
    );
    return new StartDataCollectionArgument(
        object,
        dataCollType,
        digitsReportingCriteria,
        extensions
    );
}; }
    return _cached_decoder_for_StartDataCollectionArgument(el);
}

let _cached_encoder_for_StartDataCollectionArgument: $.ASN1Encoder<StartDataCollectionArgument> | null = null;

/**
 * @summary Encodes a(n) StartDataCollectionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartDataCollectionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_StartDataCollectionArgument (value: StartDataCollectionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartDataCollectionArgument) { _cached_encoder_for_StartDataCollectionArgument = function (value: StartDataCollectionArgument, elGetter: $.ASN1Encoder<StartDataCollectionArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CallObject(value.object, $.BER),
            /* IF_ABSENT  */ ((value.dataCollType === undefined) ? undefined : _encode_DataCollType(value.dataCollType, $.BER)),
            /* IF_ABSENT  */ ((value.digitsReportingCriteria === undefined) ? undefined : _encode_DigitsReportingCriteria(value.digitsReportingCriteria, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StartDataCollectionArgument(value, elGetter);
}


/* eslint-enable */

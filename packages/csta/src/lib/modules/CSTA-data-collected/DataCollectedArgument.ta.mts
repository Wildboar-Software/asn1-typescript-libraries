/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DcollCrossRefID, _decode_DcollCrossRefID, _encode_DcollCrossRefID } from "../CSTA-data-collection/DcollCrossRefID.ta.mjs";

import { DigitsData, _decode_DigitsData, _encode_DigitsData } from "../CSTA-data-collected/DigitsData.ta.mjs";

import { TelTonesData, _decode_TelTonesData, _encode_TelTonesData } from "../CSTA-data-collected/TelTonesData.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";

import {
    DcollCause,
    _enum_for_DcollCause,
    _decode_DcollCause,
    _encode_DcollCause
} from "../CSTA-data-collected/DcollCause.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary DataCollectedArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataCollectedArgument ::= SEQUENCE
 * {    dcollCrossRefID            DcollCrossRefID,
 *     digitsData            [0] IMPLICIT DigitsData            OPTIONAL,
 *     telTonesData            [1] IMPLICIT TelTonesData        OPTIONAL,
 *     connectionInformation        [2] IMPLICIT ConnectionInformation    OPTIONAL,
 *     dcollCause            DcollCause                OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DataCollectedArgument {
    constructor (
        /**
         * @summary `dcollCrossRefID`.
         * @public
         * @readonly
         */
        readonly dcollCrossRefID: DcollCrossRefID,
        /**
         * @summary `digitsData`.
         * @public
         * @readonly
         */
        readonly digitsData: OPTIONAL<DigitsData>,
        /**
         * @summary `telTonesData`.
         * @public
         * @readonly
         */
        readonly telTonesData: OPTIONAL<TelTonesData>,
        /**
         * @summary `connectionInformation`.
         * @public
         * @readonly
         */
        readonly connectionInformation: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `dcollCause`.
         * @public
         * @readonly
         */
        readonly dcollCause: OPTIONAL<DcollCause>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a DataCollectedArgument
     * @description
     * 
     * This takes an `object` and converts it to a `DataCollectedArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataCollectedArgument`.
     * @returns {DataCollectedArgument}
     */
    public static _from_object (_o: { [_K in keyof (DataCollectedArgument)]: (DataCollectedArgument)[_K] }): DataCollectedArgument {
        return new DataCollectedArgument(_o.dcollCrossRefID, _o.digitsData, _o.telTonesData, _o.connectionInformation, _o.dcollCause, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `dcollCause`
         * @public
         * @static
         */

    public static _enum_for_dcollCause = _enum_for_DcollCause;
}

/**
 * @summary The Leading Root Component Types of DataCollectedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DataCollectedArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("dcollCrossRefID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("digitsData", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("telTonesData", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("connectionInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dcollCause", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of DataCollectedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DataCollectedArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DataCollectedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DataCollectedArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DataCollectedArgument: $.ASN1Decoder<DataCollectedArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataCollectedArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataCollectedArgument (el: _Element): DataCollectedArgument {
    if (!_cached_decoder_for_DataCollectedArgument) { _cached_decoder_for_DataCollectedArgument = function (el: _Element): DataCollectedArgument {
    let dcollCrossRefID!: DcollCrossRefID;
    let digitsData: OPTIONAL<DigitsData>;
    let telTonesData: OPTIONAL<TelTonesData>;
    let connectionInformation: OPTIONAL<ConnectionInformation>;
    let dcollCause: OPTIONAL<DcollCause>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "dcollCrossRefID": (_el: _Element): void => { dcollCrossRefID = _decode_DcollCrossRefID(_el); },
        "digitsData": (_el: _Element): void => { digitsData = $._decode_implicit<DigitsData>(() => _decode_DigitsData)(_el); },
        "telTonesData": (_el: _Element): void => { telTonesData = $._decode_implicit<TelTonesData>(() => _decode_TelTonesData)(_el); },
        "connectionInformation": (_el: _Element): void => { connectionInformation = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "dcollCause": (_el: _Element): void => { dcollCause = _decode_DcollCause(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DataCollectedArgument,
        _extension_additions_list_spec_for_DataCollectedArgument,
        _root_component_type_list_2_spec_for_DataCollectedArgument,
        undefined,
    );
    return new DataCollectedArgument(
        dcollCrossRefID,
        digitsData,
        telTonesData,
        connectionInformation,
        dcollCause,
        extensions
    );
}; }
    return _cached_decoder_for_DataCollectedArgument(el);
}

let _cached_encoder_for_DataCollectedArgument: $.ASN1Encoder<DataCollectedArgument> | null = null;

/**
 * @summary Encodes a(n) DataCollectedArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataCollectedArgument, encoded as an ASN.1 Element.
 */
export
function _encode_DataCollectedArgument (value: DataCollectedArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataCollectedArgument) { _cached_encoder_for_DataCollectedArgument = function (value: DataCollectedArgument, elGetter: $.ASN1Encoder<DataCollectedArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DcollCrossRefID(value.dcollCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.digitsData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DigitsData, $.BER)(value.digitsData, $.BER)),
            /* IF_ABSENT  */ ((value.telTonesData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_TelTonesData, $.BER)(value.telTonesData, $.BER)),
            /* IF_ABSENT  */ ((value.connectionInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ConnectionInformation, $.BER)(value.connectionInformation, $.BER)),
            /* IF_ABSENT  */ ((value.dcollCause === undefined) ? undefined : _encode_DcollCause(value.dcollCause, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DataCollectedArgument(value, elGetter);
}


/* eslint-enable */

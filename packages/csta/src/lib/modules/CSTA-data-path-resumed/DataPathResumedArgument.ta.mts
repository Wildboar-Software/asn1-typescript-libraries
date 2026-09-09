/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { IOCrossRefID, _decode_IOCrossRefID, _encode_IOCrossRefID } from "../CSTA-device-feature-types/IOCrossRefID.ta.mjs";

import { IORegisterReqID, _decode_IORegisterReqID, _encode_IORegisterReqID } from "../CSTA-device-feature-types/IORegisterReqID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary DataPathResumedArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataPathResumedArgument ::= SEQUENCE
 * {    ioCrossRefID            IOCrossRefID,
 *     ioRegisterReqID            IORegisterReqID                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DataPathResumedArgument {
    constructor (
        /**
         * @summary `ioCrossRefID`.
         * @public
         * @readonly
         */
        readonly ioCrossRefID: IOCrossRefID,
        /**
         * @summary `ioRegisterReqID`.
         * @public
         * @readonly
         */
        readonly ioRegisterReqID: OPTIONAL<IORegisterReqID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a DataPathResumedArgument
     * @description
     * 
     * This takes an `object` and converts it to a `DataPathResumedArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataPathResumedArgument`.
     * @returns {DataPathResumedArgument}
     */
    public static _from_object (_o: { [_K in keyof (DataPathResumedArgument)]: (DataPathResumedArgument)[_K] }): DataPathResumedArgument {
        return new DataPathResumedArgument(_o.ioCrossRefID, _o.ioRegisterReqID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of DataPathResumedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DataPathResumedArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("ioCrossRefID", false, $.hasAnyTag),
    new $.ComponentSpec("ioRegisterReqID", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of DataPathResumedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DataPathResumedArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DataPathResumedArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DataPathResumedArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DataPathResumedArgument: $.ASN1Decoder<DataPathResumedArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataPathResumedArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataPathResumedArgument (el: _Element): DataPathResumedArgument {
    if (!_cached_decoder_for_DataPathResumedArgument) { _cached_decoder_for_DataPathResumedArgument = function (el: _Element): DataPathResumedArgument {
    let ioCrossRefID!: IOCrossRefID;
    let ioRegisterReqID: OPTIONAL<IORegisterReqID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "ioCrossRefID": (_el: _Element): void => { ioCrossRefID = _decode_IOCrossRefID(_el); },
        "ioRegisterReqID": (_el: _Element): void => { ioRegisterReqID = _decode_IORegisterReqID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DataPathResumedArgument,
        _extension_additions_list_spec_for_DataPathResumedArgument,
        _root_component_type_list_2_spec_for_DataPathResumedArgument,
        undefined,
    );
    return new DataPathResumedArgument(
        ioCrossRefID,
        ioRegisterReqID,
        extensions
    );
}; }
    return _cached_decoder_for_DataPathResumedArgument(el);
}

let _cached_encoder_for_DataPathResumedArgument: $.ASN1Encoder<DataPathResumedArgument> | null = null;

/**
 * @summary Encodes a(n) DataPathResumedArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataPathResumedArgument, encoded as an ASN.1 Element.
 */
export
function _encode_DataPathResumedArgument (value: DataPathResumedArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataPathResumedArgument) { _cached_encoder_for_DataPathResumedArgument = function (value: DataPathResumedArgument, elGetter: $.ASN1Encoder<DataPathResumedArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IOCrossRefID(value.ioCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.ioRegisterReqID === undefined) ? undefined : _encode_IORegisterReqID(value.ioRegisterReqID, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DataPathResumedArgument(value, elGetter);
}


/* eslint-enable */

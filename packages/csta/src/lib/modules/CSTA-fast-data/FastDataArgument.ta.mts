/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    OCTET_STRING,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { IORegisterReqID, _decode_IORegisterReqID, _encode_IORegisterReqID } from "../CSTA-device-feature-types/IORegisterReqID.ta.mjs";

import { CSTAObject, _decode_CSTAObject, _encode_CSTAObject } from "../CSTA-switching-function-objects/CSTAObject.ta.mjs";

import {
    DataPathType,
    _enum_for_DataPathType,
    _decode_DataPathType,
    _encode_DataPathType
} from "../CSTA-device-feature-types/DataPathType.ta.mjs";

import { DisplayAttribute, _decode_DisplayAttribute, _encode_DisplayAttribute } from "../CSTA-fast-data/DisplayAttribute.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary FastDataArgument
 * @description
 *
 * Object, optional path type, optional display attributes, and `ioData`
 * (ECMA-269 §24.2.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FastDataArgument ::= SEQUENCE
 * {    ioRegisterReqID            IORegisterReqID                OPTIONAL,
 *     object                CSTAObject,
 *     dataPathType            DataPathType                OPTIONAL,
 *     displayAttributes        DisplayAttribute            OPTIONAL,
 *     ioData                OCTET STRING,                --corrected 12/2000
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class FastDataArgument {
    constructor (
        /**
         * @summary `ioRegisterReqID`.
         * @description
         *
         * I/O registration identifier. Mandatory if the switching function
         * supports I/O registration and the data path was requested by the
         * switching function; otherwise absent (ECMA-269 §6.2.2).
         *
         * @public
         * @readonly
         */
        readonly ioRegisterReqID: OPTIONAL<IORegisterReqID>,
        /**
         * @summary `object`.
         * @description
         *
         * `DeviceID` or `ConnectionID` on which the ephemeral data path is
         * started (ECMA-269 §24.2.3.1).
         *
         * @public
         * @readonly
         */
        readonly object: CSTAObject,
        /**
         * @summary `dataPathType`.
         * @description
         *
         * `text` (digitally encoded text) or `voice` (digitally encoded voice)
         * (ECMA-269 §24.2.3.1).
         *
         * @public
         * @readonly
         */
        readonly dataPathType: OPTIONAL<DataPathType>,
        /**
         * @summary `displayAttributes`.
         * @description
         *
         * Only when `ioData` updates a device display (ECMA-269 §24.2.3.1).
         *
         * @public
         * @readonly
         */
        readonly displayAttributes: OPTIONAL<DisplayAttribute>,
        /**
         * @summary `ioData`.
         * @description
         *
         * Payload. Spec table size is 240 characters; ASN.1 is `OCTET STRING`
         * (ECMA-269 §24.2.3.1, ECMA-285 §22.2.3).
         *
         * @public
         * @readonly
         */
        readonly ioData: OCTET_STRING,
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
     * @summary Restructures an object into a FastDataArgument
     * @description
     * 
     * This takes an `object` and converts it to a `FastDataArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FastDataArgument`.
     * @returns {FastDataArgument}
     */
    public static _from_object (_o: { [_K in keyof (FastDataArgument)]: (FastDataArgument)[_K] }): FastDataArgument {
        return new FastDataArgument(_o.ioRegisterReqID, _o.object, _o.dataPathType, _o.displayAttributes, _o.ioData, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `dataPathType`
         * @public
         * @static
         */

    public static _enum_for_dataPathType = _enum_for_DataPathType;
}

/**
 * @summary The Leading Root Component Types of FastDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FastDataArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("ioRegisterReqID", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("object", false, $.hasAnyTag),
    new $.ComponentSpec("dataPathType", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("displayAttributes", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("ioData", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of FastDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FastDataArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FastDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FastDataArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FastDataArgument: $.ASN1Decoder<FastDataArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FastDataArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FastDataArgument (el: _Element): FastDataArgument {
    if (!_cached_decoder_for_FastDataArgument) { _cached_decoder_for_FastDataArgument = function (el: _Element): FastDataArgument {
    let ioRegisterReqID: OPTIONAL<IORegisterReqID>;
    let object!: CSTAObject;
    let dataPathType: OPTIONAL<DataPathType>;
    let displayAttributes: OPTIONAL<DisplayAttribute>;
    let ioData!: OCTET_STRING;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "ioRegisterReqID": (_el: _Element): void => { ioRegisterReqID = _decode_IORegisterReqID(_el); },
        "object": (_el: _Element): void => { object = _decode_CSTAObject(_el); },
        "dataPathType": (_el: _Element): void => { dataPathType = _decode_DataPathType(_el); },
        "displayAttributes": (_el: _Element): void => { displayAttributes = _decode_DisplayAttribute(_el); },
        "ioData": (_el: _Element): void => { ioData = $._decodeOctetString(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FastDataArgument,
        _extension_additions_list_spec_for_FastDataArgument,
        _root_component_type_list_2_spec_for_FastDataArgument,
        undefined,
    );
    return new FastDataArgument(
        ioRegisterReqID,
        object,
        dataPathType,
        displayAttributes,
        ioData,
        extensions
    );
}; }
    return _cached_decoder_for_FastDataArgument(el);
}

let _cached_encoder_for_FastDataArgument: $.ASN1Encoder<FastDataArgument> | null = null;

/**
 * @summary Encodes a(n) FastDataArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FastDataArgument, encoded as an ASN.1 Element.
 */
export
function _encode_FastDataArgument (value: FastDataArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FastDataArgument) { _cached_encoder_for_FastDataArgument = function (value: FastDataArgument, elGetter: $.ASN1Encoder<FastDataArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ioRegisterReqID === undefined) ? undefined : _encode_IORegisterReqID(value.ioRegisterReqID, $.BER)),
            /* REQUIRED   */ _encode_CSTAObject(value.object, $.BER),
            /* IF_ABSENT  */ ((value.dataPathType === undefined) ? undefined : _encode_DataPathType(value.dataPathType, $.BER)),
            /* IF_ABSENT  */ ((value.displayAttributes === undefined) ? undefined : _encode_DisplayAttribute(value.displayAttributes, $.BER)),
            /* REQUIRED   */ $._encodeOctetString(value.ioData, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FastDataArgument(value, elGetter);
}


/* eslint-enable */

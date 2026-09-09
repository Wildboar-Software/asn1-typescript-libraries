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
import {
    DataPathType,
    _enum_for_DataPathType,
    _decode_DataPathType,
    _encode_DataPathType
} from "../CSTA-device-feature-types/DataPathType.ta.mjs";

import { DisplayAttributeList, _decode_DisplayAttributeList, _encode_DisplayAttributeList } from "../CSTA-device-feature-types/DisplayAttributeList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SendBroadcastDataArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendBroadcastDataArgument ::= SEQUENCE
 * {    ioData                OCTET STRING,
 *     dataPathType            DataPathType                OPTIONAL,
 *     displayAttributes        DisplayAttributeList            OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SendBroadcastDataArgument {
    constructor (
        /**
         * @summary `ioData`.
         * @public
         * @readonly
         */
        readonly ioData: OCTET_STRING,
        /**
         * @summary `dataPathType`.
         * @public
         * @readonly
         */
        readonly dataPathType: OPTIONAL<DataPathType>,
        /**
         * @summary `displayAttributes`.
         * @public
         * @readonly
         */
        readonly displayAttributes: OPTIONAL<DisplayAttributeList>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SendBroadcastDataArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SendBroadcastDataArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendBroadcastDataArgument`.
     * @returns {SendBroadcastDataArgument}
     */
    public static _from_object (_o: { [_K in keyof (SendBroadcastDataArgument)]: (SendBroadcastDataArgument)[_K] }): SendBroadcastDataArgument {
        return new SendBroadcastDataArgument(_o.ioData, _o.dataPathType, _o.displayAttributes, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `dataPathType`
         * @public
         * @static
         */

    public static _enum_for_dataPathType = _enum_for_DataPathType;
}

/**
 * @summary The Leading Root Component Types of SendBroadcastDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendBroadcastDataArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("ioData", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("dataPathType", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("displayAttributes", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SendBroadcastDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendBroadcastDataArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendBroadcastDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendBroadcastDataArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendBroadcastDataArgument: $.ASN1Decoder<SendBroadcastDataArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendBroadcastDataArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendBroadcastDataArgument (el: _Element): SendBroadcastDataArgument {
    if (!_cached_decoder_for_SendBroadcastDataArgument) { _cached_decoder_for_SendBroadcastDataArgument = function (el: _Element): SendBroadcastDataArgument {
    let ioData!: OCTET_STRING;
    let dataPathType: OPTIONAL<DataPathType>;
    let displayAttributes: OPTIONAL<DisplayAttributeList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "ioData": (_el: _Element): void => { ioData = $._decodeOctetString(_el); },
        "dataPathType": (_el: _Element): void => { dataPathType = _decode_DataPathType(_el); },
        "displayAttributes": (_el: _Element): void => { displayAttributes = _decode_DisplayAttributeList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendBroadcastDataArgument,
        _extension_additions_list_spec_for_SendBroadcastDataArgument,
        _root_component_type_list_2_spec_for_SendBroadcastDataArgument,
        undefined,
    );
    return new SendBroadcastDataArgument(
        ioData,
        dataPathType,
        displayAttributes,
        extensions
    );
}; }
    return _cached_decoder_for_SendBroadcastDataArgument(el);
}

let _cached_encoder_for_SendBroadcastDataArgument: $.ASN1Encoder<SendBroadcastDataArgument> | null = null;

/**
 * @summary Encodes a(n) SendBroadcastDataArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendBroadcastDataArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SendBroadcastDataArgument (value: SendBroadcastDataArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendBroadcastDataArgument) { _cached_encoder_for_SendBroadcastDataArgument = function (value: SendBroadcastDataArgument, elGetter: $.ASN1Encoder<SendBroadcastDataArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.ioData, $.BER),
            /* IF_ABSENT  */ ((value.dataPathType === undefined) ? undefined : _encode_DataPathType(value.dataPathType, $.BER)),
            /* IF_ABSENT  */ ((value.displayAttributes === undefined) ? undefined : _encode_DisplayAttributeList(value.displayAttributes, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendBroadcastDataArgument(value, elGetter);
}


/* eslint-enable */

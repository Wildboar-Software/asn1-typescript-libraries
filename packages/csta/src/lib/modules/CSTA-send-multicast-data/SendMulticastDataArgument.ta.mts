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
import { IOCrossRefID, _decode_IOCrossRefID, _encode_IOCrossRefID } from "../CSTA-device-feature-types/IOCrossRefID.ta.mjs";

import { DisplayAttributeList, _decode_DisplayAttributeList, _encode_DisplayAttributeList } from "../CSTA-device-feature-types/DisplayAttributeList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SendMulticastDataArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendMulticastDataArgument ::= SEQUENCE
 * {    ioCrossRefIDList        SEQUENCE OF IOCrossRefID,
 *     ioData                OCTET STRING                OPTIONAL,
 *     displayAttributes        DisplayAttributeList            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SendMulticastDataArgument {
    constructor (
        /**
         * @summary `ioCrossRefIDList`.
         * @public
         * @readonly
         */
        readonly ioCrossRefIDList: IOCrossRefID[],
        /**
         * @summary `ioData`.
         * @public
         * @readonly
         */
        readonly ioData: OPTIONAL<OCTET_STRING>,
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
     * @summary Restructures an object into a SendMulticastDataArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SendMulticastDataArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendMulticastDataArgument`.
     * @returns {SendMulticastDataArgument}
     */
    public static _from_object (_o: { [_K in keyof (SendMulticastDataArgument)]: (SendMulticastDataArgument)[_K] }): SendMulticastDataArgument {
        return new SendMulticastDataArgument(_o.ioCrossRefIDList, _o.ioData, _o.displayAttributes, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SendMulticastDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendMulticastDataArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("ioCrossRefIDList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("ioData", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("displayAttributes", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SendMulticastDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendMulticastDataArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendMulticastDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendMulticastDataArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendMulticastDataArgument: $.ASN1Decoder<SendMulticastDataArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendMulticastDataArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendMulticastDataArgument (el: _Element): SendMulticastDataArgument {
    if (!_cached_decoder_for_SendMulticastDataArgument) { _cached_decoder_for_SendMulticastDataArgument = function (el: _Element): SendMulticastDataArgument {
    let ioCrossRefIDList!: IOCrossRefID[];
    let ioData: OPTIONAL<OCTET_STRING>;
    let displayAttributes: OPTIONAL<DisplayAttributeList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "ioCrossRefIDList": (_el: _Element): void => { ioCrossRefIDList = $._decodeSequenceOf<IOCrossRefID>(() => _decode_IOCrossRefID)(_el); },
        "ioData": (_el: _Element): void => { ioData = $._decodeOctetString(_el); },
        "displayAttributes": (_el: _Element): void => { displayAttributes = _decode_DisplayAttributeList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendMulticastDataArgument,
        _extension_additions_list_spec_for_SendMulticastDataArgument,
        _root_component_type_list_2_spec_for_SendMulticastDataArgument,
        undefined,
    );
    return new SendMulticastDataArgument(
        ioCrossRefIDList,
        ioData,
        displayAttributes,
        extensions
    );
}; }
    return _cached_decoder_for_SendMulticastDataArgument(el);
}

let _cached_encoder_for_SendMulticastDataArgument: $.ASN1Encoder<SendMulticastDataArgument> | null = null;

/**
 * @summary Encodes a(n) SendMulticastDataArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendMulticastDataArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SendMulticastDataArgument (value: SendMulticastDataArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendMulticastDataArgument) { _cached_encoder_for_SendMulticastDataArgument = function (value: SendMulticastDataArgument, elGetter: $.ASN1Encoder<SendMulticastDataArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeSequenceOf<IOCrossRefID>(() => _encode_IOCrossRefID, $.BER)(value.ioCrossRefIDList, $.BER),
            /* IF_ABSENT  */ ((value.ioData === undefined) ? undefined : $._encodeOctetString(value.ioData, $.BER)),
            /* IF_ABSENT  */ ((value.displayAttributes === undefined) ? undefined : _encode_DisplayAttributeList(value.displayAttributes, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendMulticastDataArgument(value, elGetter);
}


/* eslint-enable */

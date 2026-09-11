/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ErrorControl, _decode_ErrorControl, _encode_ErrorControl } from "../V59/ErrorControl.ta.mjs";

import { Compression, _decode_Compression, _encode_Compression } from "../V59/Compression.ta.mjs";

/**
 * @summary Protocol_Item
 * @description
 *
 * Error-control and compression results for the last connection. ITU-T Rec.
 * V.59 (11/2000) §6.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Protocol-Item ::= SEQUENCE {errorControlStat  ErrorControl,
 *               compStat          Compression,
 *               ...}
 * ```
 * 
 * @class
 */
export
class Protocol_Item {
    constructor (
        /**
         * @summary `errorControlStat`.
         * @description
         *
         * V.42 / error-control negotiation and counters. ITU-T Rec. V.59
         * (11/2000) §6.12.
         * @public
         * @readonly
         */
        readonly errorControlStat: ErrorControl,
        /**
         * @summary `compStat`.
         * @description
         *
         * V.42 bis / V.44 compression negotiation and parameters. ITU-T Rec.
         * V.59 (11/2000) §6.12.
         * @public
         * @readonly
         */
        readonly compStat: Compression,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Protocol_Item
     * @description
     * 
     * This takes an `object` and converts it to a `Protocol_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Protocol_Item`.
     * @returns {Protocol_Item}
     */
    public static _from_object (_o: { [_K in keyof (Protocol_Item)]: (Protocol_Item)[_K] }): Protocol_Item {
        return new Protocol_Item(_o.errorControlStat, _o.compStat, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of Protocol_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Protocol_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("errorControlStat", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("compStat", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Protocol_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Protocol_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Protocol_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Protocol_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Protocol_Item: $.ASN1Decoder<Protocol_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Protocol_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Protocol_Item (el: _Element): Protocol_Item {
    if (!_cached_decoder_for_Protocol_Item) { _cached_decoder_for_Protocol_Item = function (el: _Element): Protocol_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Protocol-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "errorControlStat";
    sequence[1].name = "compStat";
    let errorControlStat!: ErrorControl;
    let compStat!: Compression;
    errorControlStat = _decode_ErrorControl(sequence[0]);
    compStat = _decode_Compression(sequence[1]);
    return new Protocol_Item(
        errorControlStat,
        compStat,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_Protocol_Item(el);
}

let _cached_encoder_for_Protocol_Item: $.ASN1Encoder<Protocol_Item> | null = null;

/**
 * @summary Encodes a(n) Protocol_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Protocol_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Protocol_Item (value: Protocol_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Protocol_Item) { _cached_encoder_for_Protocol_Item = function (value: Protocol_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ErrorControl(value.errorControlStat, $.BER),
            /* REQUIRED   */ _encode_Compression(value.compStat, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Protocol_Item(value, elGetter);
}

/* eslint-enable */

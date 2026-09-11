/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";



/**
 * @summary ConnectionListItems
 * @description
 *
 * Calling-device connection created by Send Message
 * (ECMA-269 §17.1.24 Table 17-131 / ECMA-285 §15.1.25).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionListItems ::= SEQUENCE
 * {    connection            ConnectionID }
 * ```
 * 
 * @class
 */
export
class ConnectionListItems {
    constructor (
        /**
         * @summary `connection`.
         * @description
         *
         * Mandatory. Connection created at the calling
         * device for one destination.
         *
         * @public
         * @readonly
         */
        readonly connection: ConnectionID
    ) {}

    /**
     * @summary Restructures an object into a ConnectionListItems
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectionListItems`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectionListItems`.
     * @returns {ConnectionListItems}
     */
    public static _from_object (_o: { [_K in keyof (ConnectionListItems)]: (ConnectionListItems)[_K] }): ConnectionListItems {
        return new ConnectionListItems(_o.connection);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectionListItems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectionListItems: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11))
];

/**
 * @summary The Trailing Root Component Types of ConnectionListItems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectionListItems: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectionListItems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectionListItems: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectionListItems: $.ASN1Decoder<ConnectionListItems> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionListItems
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionListItems (el: _Element): ConnectionListItems {
    if (!_cached_decoder_for_ConnectionListItems) { _cached_decoder_for_ConnectionListItems = function (el: _Element): ConnectionListItems {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ConnectionListItems contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "connection";
    let connection!: ConnectionID;
    connection = _decode_ConnectionID(sequence[0]);
    return new ConnectionListItems(
        connection,

    );
}; }
    return _cached_decoder_for_ConnectionListItems(el);
}

let _cached_encoder_for_ConnectionListItems: $.ASN1Encoder<ConnectionListItems> | null = null;

/**
 * @summary Encodes a(n) ConnectionListItems into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionListItems, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionListItems (value: ConnectionListItems, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionListItems) { _cached_encoder_for_ConnectionListItems = function (value: ConnectionListItems, elGetter: $.ASN1Encoder<ConnectionListItems>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectionListItems(value, elGetter);
}


/* eslint-enable */

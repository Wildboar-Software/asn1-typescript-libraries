/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { ConnectionList_Item_endpoint, _decode_ConnectionList_Item_endpoint, _encode_ConnectionList_Item_endpoint } from "../CSTA-connection-states/ConnectionList-Item-endpoint.ta.mjs";

import {
    ConnectionList_Item_associatedNID,
    _decode_ConnectionList_Item_associatedNID,
    _encode_ConnectionList_Item_associatedNID
} from "../CSTA-connection-states/ConnectionList-Item-associatedNID.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";



/**
 * @summary ConnectionList_Item
 * @description
 *
 * One device/connection in a `ConnectionList` after conference or
 * transfer (ECMA-269 §12.2.9). `newConnection`’s CallID is the
 * resulting call; `oldConnection`’s CallID is the original call.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionList-Item ::= SEQUENCE {
 *     newConnection [0] ConnectionID OPTIONAL,
 *     oldConnection [1] ConnectionID OPTIONAL,
 *     endpoint [2] ConnectionList_Item_endpoint OPTIONAL,
 *     associatedNID [3] ConnectionList_Item_associatedNID OPTIONAL,
 *     resultingConnectionInfo [UNIVERSAL 16] ConnectionInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ConnectionList_Item {
    constructor (
        /**
         * @summary `newConnection`.
         * @description
         *
         * Connection in the resulting call. Optional for
         * `transferringDevice` in the Transferred event; otherwise
         * mandatory (ECMA-269 §12.2.9).
         *
         * @public
         * @readonly
         */
        readonly newConnection: OPTIONAL<ConnectionID>,
        /**
         * @summary `oldConnection`.
         * @description
         *
         * Connection in the original call. Mandatory if the switching
         * function previously reported that CallID; otherwise optional
         * (ECMA-269 §12.2.9).
         *
         * @public
         * @readonly
         */
        readonly oldConnection: OPTIONAL<ConnectionID>,
        /**
         * @summary `endpoint`.
         * @description
         *
         * Internal device, or for external calls the far-end device if
         * known. Statuses: Provided, Not Known, Restricted
         * (ECMA-269 §12.2.9).
         *
         * @public
         * @readonly
         */
        readonly endpoint: OPTIONAL<ConnectionList_Item_endpoint>,
        /**
         * @summary `associatedNID`.
         * @description
         *
         * Network Interface Device for an external far-end. Mandatory
         * on external calls; omit for devices inside the sub-domain.
         * Statuses: Provided or Not Known (ECMA-269 §12.2.9).
         *
         * @public
         * @readonly
         */
        readonly associatedNID: OPTIONAL<ConnectionList_Item_associatedNID>,
        /**
         * @summary `resultingConnectionInfo`.
         * @description
         *
         * Flow direction and channel characteristics of the resulting
         * connection (ECMA-269 §12.2.9).
         *
         * @public
         * @readonly
         */
        readonly resultingConnectionInfo: OPTIONAL<ConnectionInformation>
    ) {}

    /**
     * @summary Restructures an object into a ConnectionList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectionList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectionList_Item`.
     * @returns {ConnectionList_Item}
     */
    public static _from_object (_o: { [_K in keyof (ConnectionList_Item)]: (ConnectionList_Item)[_K] }): ConnectionList_Item {
        return new ConnectionList_Item(_o.newConnection, _o.oldConnection, _o.endpoint, _o.associatedNID, _o.resultingConnectionInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectionList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectionList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("newConnection", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("oldConnection", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("endpoint", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("associatedNID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("resultingConnectionInfo", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ConnectionList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectionList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectionList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectionList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectionList_Item: $.ASN1Decoder<ConnectionList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionList_Item (el: _Element): ConnectionList_Item {
    if (!_cached_decoder_for_ConnectionList_Item) { _cached_decoder_for_ConnectionList_Item = function (el: _Element): ConnectionList_Item {
    let newConnection: OPTIONAL<ConnectionID>;
    let oldConnection: OPTIONAL<ConnectionID>;
    let endpoint: OPTIONAL<ConnectionList_Item_endpoint>;
    let associatedNID: OPTIONAL<ConnectionList_Item_associatedNID>;
    let resultingConnectionInfo: OPTIONAL<ConnectionInformation>;
    const callbacks: $.DecodingMap = {
        "newConnection": (_el: _Element): void => { newConnection = $._decode_explicit<ConnectionID>(() => _decode_ConnectionID)(_el); },
        "oldConnection": (_el: _Element): void => { oldConnection = $._decode_explicit<ConnectionID>(() => _decode_ConnectionID)(_el); },
        "endpoint": (_el: _Element): void => { endpoint = $._decode_explicit<ConnectionList_Item_endpoint>(() => _decode_ConnectionList_Item_endpoint)(_el); },
        "associatedNID": (_el: _Element): void => { associatedNID = $._decode_explicit<ConnectionList_Item_associatedNID>(() => _decode_ConnectionList_Item_associatedNID)(_el); },
        "resultingConnectionInfo": (_el: _Element): void => { resultingConnectionInfo = _decode_ConnectionInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectionList_Item,
        _extension_additions_list_spec_for_ConnectionList_Item,
        _root_component_type_list_2_spec_for_ConnectionList_Item,
        undefined,
    );
    return new ConnectionList_Item(
        newConnection,
        oldConnection,
        endpoint,
        associatedNID,
        resultingConnectionInfo
    );
}; }
    return _cached_decoder_for_ConnectionList_Item(el);
}

let _cached_encoder_for_ConnectionList_Item: $.ASN1Encoder<ConnectionList_Item> | null = null;

/**
 * @summary Encodes a(n) ConnectionList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionList_Item (value: ConnectionList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionList_Item) { _cached_encoder_for_ConnectionList_Item = function (value: ConnectionList_Item, elGetter: $.ASN1Encoder<ConnectionList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.newConnection === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_ConnectionID, $.BER)(value.newConnection, $.BER)),
            /* IF_ABSENT  */ ((value.oldConnection === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_ConnectionID, $.BER)(value.oldConnection, $.BER)),
            /* IF_ABSENT  */ ((value.endpoint === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_ConnectionList_Item_endpoint, $.BER)(value.endpoint, $.BER)),
            /* IF_ABSENT  */ ((value.associatedNID === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_ConnectionList_Item_associatedNID, $.BER)(value.associatedNID, $.BER)),
            /* IF_ABSENT  */ ((value.resultingConnectionInfo === undefined) ? undefined : _encode_ConnectionInformation(value.resultingConnectionInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectionList_Item(value, elGetter);
}


/* eslint-enable */

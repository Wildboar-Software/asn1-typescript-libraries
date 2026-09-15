/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { MessageID, _decode_MessageID, _encode_MessageID } from "../CSTA-device-feature-types/MessageID.ta.mjs";

import {
    AttributeToQuery,
    _enum_for_AttributeToQuery,
    _decode_AttributeToQuery,
    _encode_AttributeToQuery
} from "../CSTA-query-voice-attribute/AttributeToQuery.ta.mjs";

import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";

import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary QueryVoiceAttributeArgument
 * @description
 *
 * Message, attribute, optional resource and connection. Connection is required
 * if the attribute pertains to an Interactive Voice Device (ECMA-269
 * §26.1.7.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QueryVoiceAttributeArgument ::= SEQUENCE
 * {    messageToQuery            MessageID,
 *     attributeToQuery        AttributeToQuery, 
 *     resource            [0] IMPLICIT ResourceID            OPTIONAL,
 *     connection            ConnectionID                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class QueryVoiceAttributeArgument {
    constructor (
        /**
         * @summary `messageToQuery`.
         * @description
         *
         * Message whose attribute is queried (ECMA-269 §26.1.7.1).
         *
         * @public
         * @readonly
         */
        readonly messageToQuery: MessageID,
        /**
         * @summary `attributeToQuery`.
         * @description
         *
         * Which attribute to read (ECMA-269 §26.1.7.1).
         *
         * @public
         * @readonly
         */
        readonly attributeToQuery: AttributeToQuery,
        /**
         * @summary `resource`.
         * @description
         *
         * Interactive voice resource. Required when more than one interactive
         * voice resource exists on the connection.
         *
         * @public
         * @readonly
         */
        readonly resource: OPTIONAL<ResourceID>,
        /**
         * @summary `connection`.
         * @description
         *
         * Required if the attribute pertains to an Interactive Voice Device
         * (ECMA-269 §26.1.7.1).
         *
         * @public
         * @readonly
         */
        readonly connection: OPTIONAL<ConnectionID>,
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
     * @summary Restructures an object into a QueryVoiceAttributeArgument
     * @description
     * 
     * This takes an `object` and converts it to a `QueryVoiceAttributeArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QueryVoiceAttributeArgument`.
     * @returns {QueryVoiceAttributeArgument}
     */
    public static _from_object (_o: { [_K in keyof (QueryVoiceAttributeArgument)]: (QueryVoiceAttributeArgument)[_K] }): QueryVoiceAttributeArgument {
        return new QueryVoiceAttributeArgument(_o.messageToQuery, _o.attributeToQuery, _o.resource, _o.connection, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `attributeToQuery`
         * @public
         * @static
         */

    public static _enum_for_attributeToQuery = _enum_for_AttributeToQuery;
}

/**
 * @summary The Leading Root Component Types of QueryVoiceAttributeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_QueryVoiceAttributeArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("messageToQuery", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("attributeToQuery", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("resource", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("connection", true, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of QueryVoiceAttributeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_QueryVoiceAttributeArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of QueryVoiceAttributeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_QueryVoiceAttributeArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_QueryVoiceAttributeArgument: $.ASN1Decoder<QueryVoiceAttributeArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QueryVoiceAttributeArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QueryVoiceAttributeArgument (el: _Element): QueryVoiceAttributeArgument {
    if (!_cached_decoder_for_QueryVoiceAttributeArgument) { _cached_decoder_for_QueryVoiceAttributeArgument = function (el: _Element): QueryVoiceAttributeArgument {
    let messageToQuery!: MessageID;
    let attributeToQuery!: AttributeToQuery;
    let resource: OPTIONAL<ResourceID>;
    let connection: OPTIONAL<ConnectionID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "messageToQuery": (_el: _Element): void => { messageToQuery = _decode_MessageID(_el); },
        "attributeToQuery": (_el: _Element): void => { attributeToQuery = _decode_AttributeToQuery(_el); },
        "resource": (_el: _Element): void => { resource = $._decode_implicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_QueryVoiceAttributeArgument,
        _extension_additions_list_spec_for_QueryVoiceAttributeArgument,
        _root_component_type_list_2_spec_for_QueryVoiceAttributeArgument,
        undefined,
    );
    return new QueryVoiceAttributeArgument(
        messageToQuery,
        attributeToQuery,
        resource,
        connection,
        extensions
    );
}; }
    return _cached_decoder_for_QueryVoiceAttributeArgument(el);
}

let _cached_encoder_for_QueryVoiceAttributeArgument: $.ASN1Encoder<QueryVoiceAttributeArgument> | null = null;

/**
 * @summary Encodes a(n) QueryVoiceAttributeArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QueryVoiceAttributeArgument, encoded as an ASN.1 Element.
 */
export
function _encode_QueryVoiceAttributeArgument (value: QueryVoiceAttributeArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QueryVoiceAttributeArgument) { _cached_encoder_for_QueryVoiceAttributeArgument = function (value: QueryVoiceAttributeArgument, elGetter: $.ASN1Encoder<QueryVoiceAttributeArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MessageID(value.messageToQuery, $.BER),
            /* REQUIRED   */ _encode_AttributeToQuery(value.attributeToQuery, $.BER),
            /* IF_ABSENT  */ ((value.resource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ResourceID, $.BER)(value.resource, $.BER)),
            /* IF_ABSENT  */ ((value.connection === undefined) ? undefined : _encode_ConnectionID(value.connection, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_QueryVoiceAttributeArgument(value, elGetter);
}


/* eslint-enable */

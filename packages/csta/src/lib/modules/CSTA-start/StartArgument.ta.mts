/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary StartArgument
 * @description
 *
 * Connection, optional resource and text (ECMA-269 §26.1.14.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartArgument ::= SEQUENCE
 * {    overConnection            ConnectionID,
 *     resource            [0] IMPLICIT ResourceID            OPTIONAL,
 *     text                [1] IMPLICIT IA5String            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StartArgument {
    constructor (
        /**
         * @summary `overConnection`.
         * @description
         *
         * Connection to start with the voice resource (ECMA-269 §26.1.14.1).
         *
         * @public
         * @readonly
         */
        readonly overConnection: ConnectionID,
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
         * @summary `text`.
         * @description
         *
         * Optional text (ECMA-269 §26.1.14.1).
         *
         * @public
         * @readonly
         */
        readonly text: OPTIONAL<IA5String>,
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
     * @summary Restructures an object into a StartArgument
     * @description
     * 
     * This takes an `object` and converts it to a `StartArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartArgument`.
     * @returns {StartArgument}
     */
    public static _from_object (_o: { [_K in keyof (StartArgument)]: (StartArgument)[_K] }): StartArgument {
        return new StartArgument(_o.overConnection, _o.resource, _o.text, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of StartArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("overConnection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("resource", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("text", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of StartArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartArgument: $.ASN1Decoder<StartArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartArgument (el: _Element): StartArgument {
    if (!_cached_decoder_for_StartArgument) { _cached_decoder_for_StartArgument = function (el: _Element): StartArgument {
    let overConnection!: ConnectionID;
    let resource: OPTIONAL<ResourceID>;
    let text: OPTIONAL<IA5String>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "overConnection": (_el: _Element): void => { overConnection = _decode_ConnectionID(_el); },
        "resource": (_el: _Element): void => { resource = $._decode_implicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "text": (_el: _Element): void => { text = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartArgument,
        _extension_additions_list_spec_for_StartArgument,
        _root_component_type_list_2_spec_for_StartArgument,
        undefined,
    );
    return new StartArgument(
        overConnection,
        resource,
        text,
        extensions
    );
}; }
    return _cached_decoder_for_StartArgument(el);
}

let _cached_encoder_for_StartArgument: $.ASN1Encoder<StartArgument> | null = null;

/**
 * @summary Encodes a(n) StartArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartArgument, encoded as an ASN.1 Element.
 */
export
function _encode_StartArgument (value: StartArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartArgument) { _cached_encoder_for_StartArgument = function (value: StartArgument, elGetter: $.ASN1Encoder<StartArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.overConnection, $.BER),
            /* IF_ABSENT  */ ((value.resource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ResourceID, $.BER)(value.resource, $.BER)),
            /* IF_ABSENT  */ ((value.text === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER)(value.text, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StartArgument(value, elGetter);
}


/* eslint-enable */

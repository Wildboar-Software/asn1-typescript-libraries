/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { MessageID, _decode_MessageID, _encode_MessageID } from "../CSTA-device-feature-types/MessageID.ta.mjs";

import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ResumeArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResumeArgument ::= SEQUENCE
 * {    connection            ConnectionID,
 *     messageToResume            MessageID                OPTIONAL,   --corrected 06/2001
 *     resource            [0] IMPLICIT ResourceID            OPTIONAL,
 *     duration            INTEGER                    OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ResumeArgument {
    constructor (
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ConnectionID,
        /**
         * @summary `messageToResume`.
         * @public
         * @readonly
         */
        readonly messageToResume: OPTIONAL<MessageID>,
        /**
         * @summary `resource`.
         * @public
         * @readonly
         */
        readonly resource: OPTIONAL<ResourceID>,
        /**
         * @summary `duration`.
         * @public
         * @readonly
         */
        readonly duration: OPTIONAL<INTEGER>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ResumeArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ResumeArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResumeArgument`.
     * @returns {ResumeArgument}
     */
    public static _from_object (_o: { [_K in keyof (ResumeArgument)]: (ResumeArgument)[_K] }): ResumeArgument {
        return new ResumeArgument(_o.connection, _o.messageToResume, _o.resource, _o.duration, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ResumeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResumeArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("messageToResume", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("resource", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ResumeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResumeArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResumeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResumeArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResumeArgument: $.ASN1Decoder<ResumeArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResumeArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResumeArgument (el: _Element): ResumeArgument {
    if (!_cached_decoder_for_ResumeArgument) { _cached_decoder_for_ResumeArgument = function (el: _Element): ResumeArgument {
    let connection!: ConnectionID;
    let messageToResume: OPTIONAL<MessageID>;
    let resource: OPTIONAL<ResourceID>;
    let duration: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "messageToResume": (_el: _Element): void => { messageToResume = _decode_MessageID(_el); },
        "resource": (_el: _Element): void => { resource = $._decode_implicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "duration": (_el: _Element): void => { duration = $._decodeInteger(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResumeArgument,
        _extension_additions_list_spec_for_ResumeArgument,
        _root_component_type_list_2_spec_for_ResumeArgument,
        undefined,
    );
    return new ResumeArgument(
        connection,
        messageToResume,
        resource,
        duration,
        extensions
    );
}; }
    return _cached_decoder_for_ResumeArgument(el);
}

let _cached_encoder_for_ResumeArgument: $.ASN1Encoder<ResumeArgument> | null = null;

/**
 * @summary Encodes a(n) ResumeArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResumeArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ResumeArgument (value: ResumeArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResumeArgument) { _cached_encoder_for_ResumeArgument = function (value: ResumeArgument, elGetter: $.ASN1Encoder<ResumeArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* IF_ABSENT  */ ((value.messageToResume === undefined) ? undefined : _encode_MessageID(value.messageToResume, $.BER)),
            /* IF_ABSENT  */ ((value.resource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ResourceID, $.BER)(value.resource, $.BER)),
            /* IF_ABSENT  */ ((value.duration === undefined) ? undefined : $._encodeInteger(value.duration, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ResumeArgument(value, elGetter);
}


/* eslint-enable */

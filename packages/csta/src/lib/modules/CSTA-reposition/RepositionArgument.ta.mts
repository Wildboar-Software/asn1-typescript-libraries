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

import { Period, _decode_Period, _encode_Period } from "../CSTA-reposition/Period.ta.mjs";

import { MessageID, _decode_MessageID, _encode_MessageID } from "../CSTA-device-feature-types/MessageID.ta.mjs";

import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary RepositionArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RepositionArgument ::= SEQUENCE
 * {    connection            ConnectionID,
 *     periodOfReposition        Period,
 *     messageToReposition        MessageID                OPTIONAL,   --corrected 06/2001
 *     resource            [0] IMPLICIT ResourceID            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RepositionArgument {
    constructor (
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ConnectionID,
        /**
         * @summary `periodOfReposition`.
         * @public
         * @readonly
         */
        readonly periodOfReposition: Period,
        /**
         * @summary `messageToReposition`.
         * @public
         * @readonly
         */
        readonly messageToReposition: OPTIONAL<MessageID>,
        /**
         * @summary `resource`.
         * @public
         * @readonly
         */
        readonly resource: OPTIONAL<ResourceID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RepositionArgument
     * @description
     * 
     * This takes an `object` and converts it to a `RepositionArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RepositionArgument`.
     * @returns {RepositionArgument}
     */
    public static _from_object (_o: { [_K in keyof (RepositionArgument)]: (RepositionArgument)[_K] }): RepositionArgument {
        return new RepositionArgument(_o.connection, _o.periodOfReposition, _o.messageToReposition, _o.resource, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RepositionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RepositionArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("periodOfReposition", false, $.hasAnyTag),
    new $.ComponentSpec("messageToReposition", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("resource", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of RepositionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RepositionArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RepositionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RepositionArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RepositionArgument: $.ASN1Decoder<RepositionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RepositionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RepositionArgument (el: _Element): RepositionArgument {
    if (!_cached_decoder_for_RepositionArgument) { _cached_decoder_for_RepositionArgument = function (el: _Element): RepositionArgument {
    let connection!: ConnectionID;
    let periodOfReposition!: Period;
    let messageToReposition: OPTIONAL<MessageID>;
    let resource: OPTIONAL<ResourceID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "periodOfReposition": (_el: _Element): void => { periodOfReposition = _decode_Period(_el); },
        "messageToReposition": (_el: _Element): void => { messageToReposition = _decode_MessageID(_el); },
        "resource": (_el: _Element): void => { resource = $._decode_implicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RepositionArgument,
        _extension_additions_list_spec_for_RepositionArgument,
        _root_component_type_list_2_spec_for_RepositionArgument,
        undefined,
    );
    return new RepositionArgument(
        connection,
        periodOfReposition,
        messageToReposition,
        resource,
        extensions
    );
}; }
    return _cached_decoder_for_RepositionArgument(el);
}

let _cached_encoder_for_RepositionArgument: $.ASN1Encoder<RepositionArgument> | null = null;

/**
 * @summary Encodes a(n) RepositionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepositionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_RepositionArgument (value: RepositionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RepositionArgument) { _cached_encoder_for_RepositionArgument = function (value: RepositionArgument, elGetter: $.ASN1Encoder<RepositionArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* REQUIRED   */ _encode_Period(value.periodOfReposition, $.BER),
            /* IF_ABSENT  */ ((value.messageToReposition === undefined) ? undefined : _encode_MessageID(value.messageToReposition, $.BER)),
            /* IF_ABSENT  */ ((value.resource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ResourceID, $.BER)(value.resource, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RepositionArgument(value, elGetter);
}


/* eslint-enable */

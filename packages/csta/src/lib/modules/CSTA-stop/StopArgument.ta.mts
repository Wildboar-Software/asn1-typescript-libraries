/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import { MessageID, _decode_MessageID, _encode_MessageID } from "../CSTA-device-feature-types/MessageID.ta.mjs";
// export { MessageID, _decode_MessageID, _encode_MessageID } from "../CSTA-device-feature-types/MessageID.ta.mjs";
import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";
// export { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary StopArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopArgument ::= SEQUENCE
 * {    connection            ConnectionID,
 *     messageToBeStopped        MessageID                OPTIONAL,
 *     resource            [0] IMPLICIT ResourceID            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StopArgument {
    constructor (
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ConnectionID,
        /**
         * @summary `messageToBeStopped`.
         * @public
         * @readonly
         */
        readonly messageToBeStopped: OPTIONAL<MessageID>,
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
     * @summary Restructures an object into a StopArgument
     * @description
     * 
     * This takes an `object` and converts it to a `StopArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StopArgument`.
     * @returns {StopArgument}
     */
    public static _from_object (_o: { [_K in keyof (StopArgument)]: (StopArgument)[_K] }): StopArgument {
        return new StopArgument(_o.connection, _o.messageToBeStopped, _o.resource, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of StopArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StopArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("messageToBeStopped", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("resource", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of StopArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StopArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StopArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StopArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StopArgument: $.ASN1Decoder<StopArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopArgument (el: _Element): StopArgument {
    if (!_cached_decoder_for_StopArgument) { _cached_decoder_for_StopArgument = function (el: _Element): StopArgument {
    let connection!: ConnectionID;
    let messageToBeStopped: OPTIONAL<MessageID>;
    let resource: OPTIONAL<ResourceID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "messageToBeStopped": (_el: _Element): void => { messageToBeStopped = _decode_MessageID(_el); },
        "resource": (_el: _Element): void => { resource = $._decode_implicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StopArgument,
        _extension_additions_list_spec_for_StopArgument,
        _root_component_type_list_2_spec_for_StopArgument,
        undefined,
    );
    return new StopArgument(
        connection,
        messageToBeStopped,
        resource,
        extensions
    );
}; }
    return _cached_decoder_for_StopArgument(el);
}

let _cached_encoder_for_StopArgument: $.ASN1Encoder<StopArgument> | null = null;

/**
 * @summary Encodes a(n) StopArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopArgument, encoded as an ASN.1 Element.
 */
export
function _encode_StopArgument (value: StopArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopArgument) { _cached_encoder_for_StopArgument = function (value: StopArgument, elGetter: $.ASN1Encoder<StopArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* IF_ABSENT  */ ((value.messageToBeStopped === undefined) ? undefined : _encode_MessageID(value.messageToBeStopped, $.BER)),
            /* IF_ABSENT  */ ((value.resource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ResourceID, $.BER)(value.resource, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StopArgument(value, elGetter);
}


/* eslint-enable */

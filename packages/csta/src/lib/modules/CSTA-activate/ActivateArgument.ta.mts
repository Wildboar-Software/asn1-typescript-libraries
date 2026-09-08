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
import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";
// export { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary ActivateArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivateArgument ::= SEQUENCE
 * {    overConnection    ConnectionID,
 *     resource            [0] IMPLICIT ResourceID            OPTIONAL,
 *     ruleName            [1] IMPLICIT IA5String,
 *     grammarName            [2] IMPLICIT IA5String            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ActivateArgument {
    constructor (
        /**
         * @summary `overConnection`.
         * @public
         * @readonly
         */
        readonly overConnection: ConnectionID,
        /**
         * @summary `resource`.
         * @public
         * @readonly
         */
        readonly resource: OPTIONAL<ResourceID>,
        /**
         * @summary `ruleName`.
         * @public
         * @readonly
         */
        readonly ruleName: IA5String,
        /**
         * @summary `grammarName`.
         * @public
         * @readonly
         */
        readonly grammarName: OPTIONAL<IA5String>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ActivateArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ActivateArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActivateArgument`.
     * @returns {ActivateArgument}
     */
    public static _from_object (_o: { [_K in keyof (ActivateArgument)]: (ActivateArgument)[_K] }): ActivateArgument {
        return new ActivateArgument(_o.overConnection, _o.resource, _o.ruleName, _o.grammarName, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ActivateArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ActivateArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("overConnection", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("resource", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("ruleName", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("grammarName", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ActivateArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ActivateArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ActivateArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ActivateArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ActivateArgument: $.ASN1Decoder<ActivateArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActivateArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActivateArgument (el: _Element): ActivateArgument {
    if (!_cached_decoder_for_ActivateArgument) { _cached_decoder_for_ActivateArgument = function (el: _Element): ActivateArgument {
    let overConnection!: ConnectionID;
    let resource: OPTIONAL<ResourceID>;
    let ruleName!: IA5String;
    let grammarName: OPTIONAL<IA5String>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "overConnection": (_el: _Element): void => { overConnection = _decode_ConnectionID(_el); },
        "resource": (_el: _Element): void => { resource = $._decode_implicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "ruleName": (_el: _Element): void => { ruleName = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "grammarName": (_el: _Element): void => { grammarName = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ActivateArgument,
        _extension_additions_list_spec_for_ActivateArgument,
        _root_component_type_list_2_spec_for_ActivateArgument,
        undefined,
    );
    return new ActivateArgument(
        overConnection,
        resource,
        ruleName,
        grammarName,
        extensions
    );
}; }
    return _cached_decoder_for_ActivateArgument(el);
}

let _cached_encoder_for_ActivateArgument: $.ASN1Encoder<ActivateArgument> | null = null;

/**
 * @summary Encodes a(n) ActivateArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivateArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ActivateArgument (value: ActivateArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActivateArgument) { _cached_encoder_for_ActivateArgument = function (value: ActivateArgument, elGetter: $.ASN1Encoder<ActivateArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.overConnection, $.BER),
            /* IF_ABSENT  */ ((value.resource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ResourceID, $.BER)(value.resource, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER)(value.ruleName, $.BER),
            /* IF_ABSENT  */ ((value.grammarName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER)(value.grammarName, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ActivateArgument(value, elGetter);
}


/* eslint-enable */

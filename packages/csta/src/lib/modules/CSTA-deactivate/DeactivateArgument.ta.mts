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
 * @summary DeactivateArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeactivateArgument ::= SEQUENCE
 * {    overConnection            ConnectionID,
 *     resource            [0] IMPLICIT ResourceID            OPTIONAL,
 *     ruleName            IA5String,
 *     grammarName            [1] IMPLICIT IA5String            OPTIONAL,
 *     extensions            [2] IMPLICIT CSTACommonArguments    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DeactivateArgument {
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
     * @summary Restructures an object into a DeactivateArgument
     * @description
     * 
     * This takes an `object` and converts it to a `DeactivateArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeactivateArgument`.
     * @returns {DeactivateArgument}
     */
    public static _from_object (_o: { [_K in keyof (DeactivateArgument)]: (DeactivateArgument)[_K] }): DeactivateArgument {
        return new DeactivateArgument(_o.overConnection, _o.resource, _o.ruleName, _o.grammarName, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of DeactivateArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeactivateArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("overConnection", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("resource", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("ruleName", false, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("grammarName", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DeactivateArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeactivateArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeactivateArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeactivateArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeactivateArgument: $.ASN1Decoder<DeactivateArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeactivateArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeactivateArgument (el: _Element): DeactivateArgument {
    if (!_cached_decoder_for_DeactivateArgument) { _cached_decoder_for_DeactivateArgument = function (el: _Element): DeactivateArgument {
    let overConnection!: ConnectionID;
    let resource: OPTIONAL<ResourceID>;
    let ruleName!: IA5String;
    let grammarName: OPTIONAL<IA5String>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "overConnection": (_el: _Element): void => { overConnection = _decode_ConnectionID(_el); },
        "resource": (_el: _Element): void => { resource = $._decode_implicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "ruleName": (_el: _Element): void => { ruleName = $._decodeIA5String(_el); },
        "grammarName": (_el: _Element): void => { grammarName = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<CSTACommonArguments>(() => _decode_CSTACommonArguments)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeactivateArgument,
        _extension_additions_list_spec_for_DeactivateArgument,
        _root_component_type_list_2_spec_for_DeactivateArgument,
        undefined,
    );
    return new DeactivateArgument(
        overConnection,
        resource,
        ruleName,
        grammarName,
        extensions
    );
}; }
    return _cached_decoder_for_DeactivateArgument(el);
}

let _cached_encoder_for_DeactivateArgument: $.ASN1Encoder<DeactivateArgument> | null = null;

/**
 * @summary Encodes a(n) DeactivateArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeactivateArgument, encoded as an ASN.1 Element.
 */
export
function _encode_DeactivateArgument (value: DeactivateArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeactivateArgument) { _cached_encoder_for_DeactivateArgument = function (value: DeactivateArgument, elGetter: $.ASN1Encoder<DeactivateArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.overConnection, $.BER),
            /* IF_ABSENT  */ ((value.resource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ResourceID, $.BER)(value.resource, $.BER)),
            /* REQUIRED   */ $._encodeIA5String(value.ruleName, $.BER),
            /* IF_ABSENT  */ ((value.grammarName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER)(value.grammarName, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CSTACommonArguments, $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeactivateArgument(value, elGetter);
}


/* eslint-enable */

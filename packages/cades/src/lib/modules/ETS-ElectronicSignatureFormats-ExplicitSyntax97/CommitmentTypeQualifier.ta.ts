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
import { COMMITMENT_QUALIFIER } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/COMMITMENT-QUALIFIER.oca.js";
export { COMMITMENT_QUALIFIER } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/COMMITMENT-QUALIFIER.oca.js";


/* START_OF_SYMBOL_DEFINITION CommitmentTypeQualifier */
/**
 * @summary CommitmentTypeQualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommitmentTypeQualifier ::= SEQUENCE {
 *     commitmentQualifierId       COMMITMENT-QUALIFIER.&id,
 *     qualifier                   COMMITMENT-QUALIFIER.&Qualifier OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CommitmentTypeQualifier {
    constructor (
        /**
         * @summary `commitmentQualifierId`.
         * @public
         * @readonly
         */
        readonly commitmentQualifierId: OBJECT_IDENTIFIER,
        /**
         * @summary `qualifier`.
         * @public
         * @readonly
         */
        readonly qualifier: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a CommitmentTypeQualifier
     * @description
     * 
     * This takes an `object` and converts it to a `CommitmentTypeQualifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommitmentTypeQualifier`.
     * @returns {CommitmentTypeQualifier}
     */
    public static _from_object (_o: { [_K in keyof (CommitmentTypeQualifier)]: (CommitmentTypeQualifier)[_K] }): CommitmentTypeQualifier {
        return new CommitmentTypeQualifier(_o.commitmentQualifierId, _o.qualifier);
    }


}
/* END_OF_SYMBOL_DEFINITION CommitmentTypeQualifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommitmentTypeQualifier */
/**
 * @summary The Leading Root Component Types of CommitmentTypeQualifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommitmentTypeQualifier: $.ComponentSpec[] = [
    new $.ComponentSpec("commitmentQualifierId", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("qualifier", true, $.hasAnyTag, undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommitmentTypeQualifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommitmentTypeQualifier */
/**
 * @summary The Trailing Root Component Types of CommitmentTypeQualifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommitmentTypeQualifier: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommitmentTypeQualifier */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommitmentTypeQualifier */
/**
 * @summary The Extension Addition Component Types of CommitmentTypeQualifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommitmentTypeQualifier: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommitmentTypeQualifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommitmentTypeQualifier */
let _cached_decoder_for_CommitmentTypeQualifier: $.ASN1Decoder<CommitmentTypeQualifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommitmentTypeQualifier */

/* START_OF_SYMBOL_DEFINITION _decode_CommitmentTypeQualifier */
/**
 * @summary Decodes an ASN.1 element into a(n) CommitmentTypeQualifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommitmentTypeQualifier} The decoded data structure.
 */
export
function _decode_CommitmentTypeQualifier (el: _Element) {
    if (!_cached_decoder_for_CommitmentTypeQualifier) { _cached_decoder_for_CommitmentTypeQualifier = function (el: _Element): CommitmentTypeQualifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let commitmentQualifierId!: OBJECT_IDENTIFIER;
    let qualifier: OPTIONAL<_Element>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "commitmentQualifierId": (_el: _Element): void => { commitmentQualifierId = $._decodeObjectIdentifier(_el); },
        "qualifier": (_el: _Element): void => { qualifier = $._decodeAny(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommitmentTypeQualifier,
        _extension_additions_list_spec_for_CommitmentTypeQualifier,
        _root_component_type_list_2_spec_for_CommitmentTypeQualifier,
        undefined,
    );
    return new CommitmentTypeQualifier( /* SEQUENCE_CONSTRUCTOR_CALL */
        commitmentQualifierId,
        qualifier
    );
}; }
    return _cached_decoder_for_CommitmentTypeQualifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommitmentTypeQualifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommitmentTypeQualifier */
let _cached_encoder_for_CommitmentTypeQualifier: $.ASN1Encoder<CommitmentTypeQualifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommitmentTypeQualifier */

/* START_OF_SYMBOL_DEFINITION _encode_CommitmentTypeQualifier */
/**
 * @summary Encodes a(n) CommitmentTypeQualifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommitmentTypeQualifier, encoded as an ASN.1 Element.
 */
export
function _encode_CommitmentTypeQualifier (value: CommitmentTypeQualifier, elGetter: $.ASN1Encoder<CommitmentTypeQualifier>) {
    if (!_cached_encoder_for_CommitmentTypeQualifier) { _cached_encoder_for_CommitmentTypeQualifier = function (value: CommitmentTypeQualifier, elGetter: $.ASN1Encoder<CommitmentTypeQualifier>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.commitmentQualifierId, $.BER),
            /* IF_ABSENT  */ ((value.qualifier === undefined) ? undefined : $._encodeAny(value.qualifier, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommitmentTypeQualifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommitmentTypeQualifier */

/* eslint-enable */

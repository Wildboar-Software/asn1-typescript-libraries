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
import * as $ from "asn1-ts/dist/node/functional";
import { CommitmentTypeIdentifier, _decode_CommitmentTypeIdentifier, _encode_CommitmentTypeIdentifier } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CommitmentTypeIdentifier.ta";
export { CommitmentTypeIdentifier, _decode_CommitmentTypeIdentifier, _encode_CommitmentTypeIdentifier } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CommitmentTypeIdentifier.ta";
import { CommitmentTypeQualifier, _decode_CommitmentTypeQualifier, _encode_CommitmentTypeQualifier } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CommitmentTypeQualifier.ta";
export { CommitmentTypeQualifier, _decode_CommitmentTypeQualifier, _encode_CommitmentTypeQualifier } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CommitmentTypeQualifier.ta";


/* START_OF_SYMBOL_DEFINITION CommitmentTypeIndication */
/**
 * @summary CommitmentTypeIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommitmentTypeIndication ::= SEQUENCE {
 *     commitmentTypeId            CommitmentTypeIdentifier,
 *     commitmentTypeQualifier     SEQUENCE SIZE (1..MAX) OF CommitmentTypeQualifier OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CommitmentTypeIndication {
    constructor (
        /**
         * @summary `commitmentTypeId`.
         * @public
         * @readonly
         */
        readonly commitmentTypeId: CommitmentTypeIdentifier,
        /**
         * @summary `commitmentTypeQualifier`.
         * @public
         * @readonly
         */
        readonly commitmentTypeQualifier: OPTIONAL<CommitmentTypeQualifier[]>
    ) {}

    /**
     * @summary Restructures an object into a CommitmentTypeIndication
     * @description
     * 
     * This takes an `object` and converts it to a `CommitmentTypeIndication`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommitmentTypeIndication`.
     * @returns {CommitmentTypeIndication}
     */
    public static _from_object (_o: { [_K in keyof (CommitmentTypeIndication)]: (CommitmentTypeIndication)[_K] }): CommitmentTypeIndication {
        return new CommitmentTypeIndication(_o.commitmentTypeId, _o.commitmentTypeQualifier);
    }


}
/* END_OF_SYMBOL_DEFINITION CommitmentTypeIndication */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommitmentTypeIndication */
/**
 * @summary The Leading Root Component Types of CommitmentTypeIndication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommitmentTypeIndication: $.ComponentSpec[] = [
    new $.ComponentSpec("commitmentTypeId", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("commitmentTypeQualifier", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommitmentTypeIndication */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommitmentTypeIndication */
/**
 * @summary The Trailing Root Component Types of CommitmentTypeIndication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommitmentTypeIndication: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommitmentTypeIndication */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommitmentTypeIndication */
/**
 * @summary The Extension Addition Component Types of CommitmentTypeIndication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommitmentTypeIndication: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommitmentTypeIndication */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommitmentTypeIndication */
let _cached_decoder_for_CommitmentTypeIndication: $.ASN1Decoder<CommitmentTypeIndication> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommitmentTypeIndication */

/* START_OF_SYMBOL_DEFINITION _decode_CommitmentTypeIndication */
/**
 * @summary Decodes an ASN.1 element into a(n) CommitmentTypeIndication
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommitmentTypeIndication} The decoded data structure.
 */
export
function _decode_CommitmentTypeIndication (el: _Element) {
    if (!_cached_decoder_for_CommitmentTypeIndication) { _cached_decoder_for_CommitmentTypeIndication = function (el: _Element): CommitmentTypeIndication {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let commitmentTypeId!: CommitmentTypeIdentifier;
    let commitmentTypeQualifier: OPTIONAL<CommitmentTypeQualifier[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "commitmentTypeId": (_el: _Element): void => { commitmentTypeId = _decode_CommitmentTypeIdentifier(_el); },
        "commitmentTypeQualifier": (_el: _Element): void => { commitmentTypeQualifier = $._decodeSequenceOf<CommitmentTypeQualifier>(() => _decode_CommitmentTypeQualifier)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommitmentTypeIndication,
        _extension_additions_list_spec_for_CommitmentTypeIndication,
        _root_component_type_list_2_spec_for_CommitmentTypeIndication,
        undefined,
    );
    return new CommitmentTypeIndication( /* SEQUENCE_CONSTRUCTOR_CALL */
        commitmentTypeId,
        commitmentTypeQualifier
    );
}; }
    return _cached_decoder_for_CommitmentTypeIndication(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommitmentTypeIndication */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommitmentTypeIndication */
let _cached_encoder_for_CommitmentTypeIndication: $.ASN1Encoder<CommitmentTypeIndication> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommitmentTypeIndication */

/* START_OF_SYMBOL_DEFINITION _encode_CommitmentTypeIndication */
/**
 * @summary Encodes a(n) CommitmentTypeIndication into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommitmentTypeIndication, encoded as an ASN.1 Element.
 */
export
function _encode_CommitmentTypeIndication (value: CommitmentTypeIndication, elGetter: $.ASN1Encoder<CommitmentTypeIndication>) {
    if (!_cached_encoder_for_CommitmentTypeIndication) { _cached_encoder_for_CommitmentTypeIndication = function (value: CommitmentTypeIndication, elGetter: $.ASN1Encoder<CommitmentTypeIndication>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CommitmentTypeIdentifier(value.commitmentTypeId, $.BER),
            /* IF_ABSENT  */ ((value.commitmentTypeQualifier === undefined) ? undefined : $._encodeSequenceOf<CommitmentTypeQualifier>(() => _encode_CommitmentTypeQualifier, $.BER)(value.commitmentTypeQualifier, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommitmentTypeIndication(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommitmentTypeIndication */

/* eslint-enable */

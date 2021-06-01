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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    SyntaxVersion,
    _decode_SyntaxVersion,
    _encode_SyntaxVersion,
} from '../EDIMSInformationObjects/SyntaxVersion.ta';
export {
    SyntaxVersion,
    _decode_SyntaxVersion,
    _encode_SyntaxVersion,
} from '../EDIMSInformationObjects/SyntaxVersion.ta';
import {
    SyntaxIdentifier,
    _decode_SyntaxIdentifier,
    _encode_SyntaxIdentifier,
} from '../EDIMSInformationObjects/SyntaxIdentifier.ta';
export {
    SyntaxIdentifier,
    _decode_SyntaxIdentifier,
    _encode_SyntaxIdentifier,
} from '../EDIMSInformationObjects/SyntaxIdentifier.ta';
import {
    EDIMessageTypeFieldSubField,
    _decode_EDIMessageTypeFieldSubField,
    _encode_EDIMessageTypeFieldSubField,
} from '../EDIMSInformationObjects/EDIMessageTypeFieldSubField.ta';
export {
    EDIMessageTypeFieldSubField,
    _decode_EDIMessageTypeFieldSubField,
    _encode_EDIMessageTypeFieldSubField,
} from '../EDIMSInformationObjects/EDIMessageTypeFieldSubField.ta';
import {
    DocumentVersion,
    _decode_DocumentVersion,
    _encode_DocumentVersion,
} from '../EDIMUseOfDirectory/DocumentVersion.ta';
export {
    DocumentVersion,
    _decode_DocumentVersion,
    _encode_DocumentVersion,
} from '../EDIMUseOfDirectory/DocumentVersion.ta';
import {
    DocumentRelease,
    _decode_DocumentRelease,
    _encode_DocumentRelease,
} from '../EDIMUseOfDirectory/DocumentRelease.ta';
export {
    DocumentRelease,
    _decode_DocumentRelease,
    _encode_DocumentRelease,
} from '../EDIMUseOfDirectory/DocumentRelease.ta';
import {
    ControllingAgency,
    _decode_ControllingAgency,
    _encode_ControllingAgency,
} from '../EDIMUseOfDirectory/ControllingAgency.ta';
export {
    ControllingAgency,
    _decode_ControllingAgency,
    _encode_ControllingAgency,
} from '../EDIMUseOfDirectory/ControllingAgency.ta';
import {
    AssociationAssignedCode,
    _decode_AssociationAssignedCode,
    _encode_AssociationAssignedCode,
} from '../EDIMUseOfDirectory/AssociationAssignedCode.ta';
export {
    AssociationAssignedCode,
    _decode_AssociationAssignedCode,
    _encode_AssociationAssignedCode,
} from '../EDIMUseOfDirectory/AssociationAssignedCode.ta';

/* START_OF_SYMBOL_DEFINITION EDIProcessableDocument */
/**
 * @summary EDIProcessableDocument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIProcessableDocument ::= SEQUENCE {
 *   standardVersion          [0]  SyntaxVersion OPTIONAL,
 *   standardSyntaxId         [1]  SyntaxIdentifier OPTIONAL,
 *   documentType             [2]  EDIMessageTypeFieldSubField OPTIONAL,
 *   documentVersion          [3]  DocumentVersion OPTIONAL,
 *   documentRelease          [4]  DocumentRelease OPTIONAL,
 *   controllingAgency        [5]  ControllingAgency OPTIONAL,
 *   associationAssignedCode  [6]  AssociationAssignedCode OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EDIProcessableDocument {
    constructor(
        /**
         * @summary `standardVersion`.
         * @public
         * @readonly
         */
        readonly standardVersion: OPTIONAL<SyntaxVersion>,
        /**
         * @summary `standardSyntaxId`.
         * @public
         * @readonly
         */
        readonly standardSyntaxId: OPTIONAL<SyntaxIdentifier>,
        /**
         * @summary `documentType`.
         * @public
         * @readonly
         */
        readonly documentType: OPTIONAL<EDIMessageTypeFieldSubField>,
        /**
         * @summary `documentVersion`.
         * @public
         * @readonly
         */
        readonly documentVersion: OPTIONAL<DocumentVersion>,
        /**
         * @summary `documentRelease`.
         * @public
         * @readonly
         */
        readonly documentRelease: OPTIONAL<DocumentRelease>,
        /**
         * @summary `controllingAgency`.
         * @public
         * @readonly
         */
        readonly controllingAgency: OPTIONAL<ControllingAgency>,
        /**
         * @summary `associationAssignedCode`.
         * @public
         * @readonly
         */
        readonly associationAssignedCode: OPTIONAL<AssociationAssignedCode>
    ) {}

    /**
     * @summary Restructures an object into a EDIProcessableDocument
     * @description
     *
     * This takes an `object` and converts it to a `EDIProcessableDocument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDIProcessableDocument`.
     * @returns {EDIProcessableDocument}
     */
    public static _from_object(
        _o: { [_K in keyof EDIProcessableDocument]: EDIProcessableDocument[_K] }
    ): EDIProcessableDocument {
        return new EDIProcessableDocument(
            _o.standardVersion,
            _o.standardSyntaxId,
            _o.documentType,
            _o.documentVersion,
            _o.documentRelease,
            _o.controllingAgency,
            _o.associationAssignedCode
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EDIProcessableDocument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDIProcessableDocument */
/**
 * @summary The Leading Root Component Types of EDIProcessableDocument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDIProcessableDocument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'standardVersion',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'standardSyntaxId',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'documentType',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'documentVersion',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'documentRelease',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'controllingAgency',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'associationAssignedCode',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDIProcessableDocument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDIProcessableDocument */
/**
 * @summary The Trailing Root Component Types of EDIProcessableDocument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDIProcessableDocument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDIProcessableDocument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDIProcessableDocument */
/**
 * @summary The Extension Addition Component Types of EDIProcessableDocument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDIProcessableDocument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDIProcessableDocument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIProcessableDocument */
let _cached_decoder_for_EDIProcessableDocument: $.ASN1Decoder<EDIProcessableDocument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIProcessableDocument */

/* START_OF_SYMBOL_DEFINITION _decode_EDIProcessableDocument */
/**
 * @summary Decodes an ASN.1 element into a(n) EDIProcessableDocument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIProcessableDocument} The decoded data structure.
 */
export function _decode_EDIProcessableDocument(el: _Element) {
    if (!_cached_decoder_for_EDIProcessableDocument) {
        _cached_decoder_for_EDIProcessableDocument = function (
            el: _Element
        ): EDIProcessableDocument {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let standardVersion: OPTIONAL<SyntaxVersion>;
            let standardSyntaxId: OPTIONAL<SyntaxIdentifier>;
            let documentType: OPTIONAL<EDIMessageTypeFieldSubField>;
            let documentVersion: OPTIONAL<DocumentVersion>;
            let documentRelease: OPTIONAL<DocumentRelease>;
            let controllingAgency: OPTIONAL<ControllingAgency>;
            let associationAssignedCode: OPTIONAL<AssociationAssignedCode>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                standardVersion: (_el: _Element): void => {
                    standardVersion = $._decode_implicit<SyntaxVersion>(
                        () => _decode_SyntaxVersion
                    )(_el);
                },
                standardSyntaxId: (_el: _Element): void => {
                    standardSyntaxId = $._decode_implicit<SyntaxIdentifier>(
                        () => _decode_SyntaxIdentifier
                    )(_el);
                },
                documentType: (_el: _Element): void => {
                    documentType = $._decode_implicit<EDIMessageTypeFieldSubField>(
                        () => _decode_EDIMessageTypeFieldSubField
                    )(_el);
                },
                documentVersion: (_el: _Element): void => {
                    documentVersion = $._decode_implicit<DocumentVersion>(
                        () => _decode_DocumentVersion
                    )(_el);
                },
                documentRelease: (_el: _Element): void => {
                    documentRelease = $._decode_implicit<DocumentRelease>(
                        () => _decode_DocumentRelease
                    )(_el);
                },
                controllingAgency: (_el: _Element): void => {
                    controllingAgency = $._decode_implicit<ControllingAgency>(
                        () => _decode_ControllingAgency
                    )(_el);
                },
                associationAssignedCode: (_el: _Element): void => {
                    associationAssignedCode = $._decode_implicit<AssociationAssignedCode>(
                        () => _decode_AssociationAssignedCode
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EDIProcessableDocument,
                _extension_additions_list_spec_for_EDIProcessableDocument,
                _root_component_type_list_2_spec_for_EDIProcessableDocument,
                undefined
            );
            return new EDIProcessableDocument /* SEQUENCE_CONSTRUCTOR_CALL */(
                standardVersion,
                standardSyntaxId,
                documentType,
                documentVersion,
                documentRelease,
                controllingAgency,
                associationAssignedCode
            );
        };
    }
    return _cached_decoder_for_EDIProcessableDocument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDIProcessableDocument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIProcessableDocument */
let _cached_encoder_for_EDIProcessableDocument: $.ASN1Encoder<EDIProcessableDocument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIProcessableDocument */

/* START_OF_SYMBOL_DEFINITION _encode_EDIProcessableDocument */
/**
 * @summary Encodes a(n) EDIProcessableDocument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIProcessableDocument, encoded as an ASN.1 Element.
 */
export function _encode_EDIProcessableDocument(
    value: EDIProcessableDocument,
    elGetter: $.ASN1Encoder<EDIProcessableDocument>
) {
    if (!_cached_encoder_for_EDIProcessableDocument) {
        _cached_encoder_for_EDIProcessableDocument = function (
            value: EDIProcessableDocument,
            elGetter: $.ASN1Encoder<EDIProcessableDocument>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.standardVersion === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_SyntaxVersion,
                                  $.BER
                              )(value.standardVersion, $.BER),
                        /* IF_ABSENT  */ value.standardSyntaxId === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_SyntaxIdentifier,
                                  $.BER
                              )(value.standardSyntaxId, $.BER),
                        /* IF_ABSENT  */ value.documentType === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_EDIMessageTypeFieldSubField,
                                  $.BER
                              )(value.documentType, $.BER),
                        /* IF_ABSENT  */ value.documentVersion === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_DocumentVersion,
                                  $.BER
                              )(value.documentVersion, $.BER),
                        /* IF_ABSENT  */ value.documentRelease === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_DocumentRelease,
                                  $.BER
                              )(value.documentRelease, $.BER),
                        /* IF_ABSENT  */ value.controllingAgency === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_ControllingAgency,
                                  $.BER
                              )(value.controllingAgency, $.BER),
                        /* IF_ABSENT  */ value.associationAssignedCode ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_AssociationAssignedCode,
                                  $.BER
                              )(value.associationAssignedCode, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EDIProcessableDocument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDIProcessableDocument */

/* eslint-enable */

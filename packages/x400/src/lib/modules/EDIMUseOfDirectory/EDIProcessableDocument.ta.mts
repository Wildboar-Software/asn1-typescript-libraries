/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    SyntaxVersion,
    _decode_SyntaxVersion,
    _encode_SyntaxVersion,
} from '../EDIMSInformationObjects/SyntaxVersion.ta.mjs';
import {
    SyntaxIdentifier,
    _decode_SyntaxIdentifier,
    _encode_SyntaxIdentifier,
} from '../EDIMSInformationObjects/SyntaxIdentifier.ta.mjs';
import {
    EDIMessageTypeFieldSubField,
    _decode_EDIMessageTypeFieldSubField,
    _encode_EDIMessageTypeFieldSubField,
} from '../EDIMSInformationObjects/EDIMessageTypeFieldSubField.ta.mjs';
import {
    DocumentVersion,
    _decode_DocumentVersion,
    _encode_DocumentVersion,
} from '../EDIMUseOfDirectory/DocumentVersion.ta.mjs';
import {
    DocumentRelease,
    _decode_DocumentRelease,
    _encode_DocumentRelease,
} from '../EDIMUseOfDirectory/DocumentRelease.ta.mjs';
import {
    ControllingAgency,
    _decode_ControllingAgency,
    _encode_ControllingAgency,
} from '../EDIMUseOfDirectory/ControllingAgency.ta.mjs';
import {
    AssociationAssignedCode,
    _decode_AssociationAssignedCode,
    _encode_AssociationAssignedCode,
} from '../EDIMUseOfDirectory/AssociationAssignedCode.ta.mjs';
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
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'standardSyntaxId',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'documentType',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'documentVersion',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'documentRelease',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'controllingAgency',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'associationAssignedCode',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
];

/**
 * @summary The Trailing Root Component Types of EDIProcessableDocument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDIProcessableDocument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EDIProcessableDocument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDIProcessableDocument: $.ComponentSpec[] = [];

let _cached_decoder_for_EDIProcessableDocument: $.ASN1Decoder<EDIProcessableDocument> | null = null;

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

let _cached_encoder_for_EDIProcessableDocument: $.ASN1Encoder<EDIProcessableDocument> | null = null;

/**
 * @summary Encodes a(n) EDIProcessableDocument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIProcessableDocument, encoded as an ASN.1 Element.
 */
export function _encode_EDIProcessableDocument(
    value: EDIProcessableDocument,
    elGetter: $.ASN1Encoder<EDIProcessableDocument>
) {
    if (!_cached_encoder_for_EDIProcessableDocument) {
        _cached_encoder_for_EDIProcessableDocument = function (
            value: EDIProcessableDocument        ): _Element {
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


/* eslint-enable */

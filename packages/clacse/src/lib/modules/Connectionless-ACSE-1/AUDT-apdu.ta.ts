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
    AUDT_apdu_protocol_version,
    AUDT_apdu_protocol_version_version1 /* IMPORTED_LONG_NAMED_BIT */,
    version1 /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_AUDT_apdu_protocol_version,
    _encode_AUDT_apdu_protocol_version,
} from '../Connectionless-ACSE-1/AUDT-apdu-protocol-version.ta';
export {
    AUDT_apdu_protocol_version,
    AUDT_apdu_protocol_version_version1 /* IMPORTED_LONG_NAMED_BIT */,
    version1 /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_AUDT_apdu_protocol_version,
    _encode_AUDT_apdu_protocol_version,
} from '../Connectionless-ACSE-1/AUDT-apdu-protocol-version.ta';
import {
    ASO_context_name,
    _decode_ASO_context_name,
    _encode_ASO_context_name,
} from '../Connectionless-ACSE-1/ASO-context-name.ta';
export {
    ASO_context_name,
    _decode_ASO_context_name,
    _encode_ASO_context_name,
} from '../Connectionless-ACSE-1/ASO-context-name.ta';
import {
    AP_title,
    _decode_AP_title,
    _encode_AP_title,
} from '@wildboar/acse/src/lib/modules/ACSE-1/AP-title.ta';
export {
    AP_title,
    _decode_AP_title,
    _encode_AP_title,
} from '@wildboar/acse/src/lib/modules/ACSE-1/AP-title.ta';
import {
    AE_qualifier,
    _decode_AE_qualifier,
    _encode_AE_qualifier,
} from '@wildboar/acse/src/lib/modules/ACSE-1/AE-qualifier.ta';
export {
    AE_qualifier,
    _decode_AE_qualifier,
    _encode_AE_qualifier,
} from '@wildboar/acse/src/lib/modules/ACSE-1/AE-qualifier.ta';
import {
    AP_invocation_id,
    _decode_AP_invocation_id,
    _encode_AP_invocation_id,
} from '../Connectionless-ACSE-1/AP-invocation-id.ta';
export {
    AP_invocation_id,
    _decode_AP_invocation_id,
    _encode_AP_invocation_id,
} from '../Connectionless-ACSE-1/AP-invocation-id.ta';
import {
    AE_invocation_id,
    _decode_AE_invocation_id,
    _encode_AE_invocation_id,
} from '../Connectionless-ACSE-1/AE-invocation-id.ta';
export {
    AE_invocation_id,
    _decode_AE_invocation_id,
    _encode_AE_invocation_id,
} from '../Connectionless-ACSE-1/AE-invocation-id.ta';
import {
    Mechanism_name,
    _decode_Mechanism_name,
    _encode_Mechanism_name,
} from '@wildboar/acse/src/lib/modules/ACSE-1/Mechanism-name.ta';
export {
    Mechanism_name,
    _decode_Mechanism_name,
    _encode_Mechanism_name,
} from '@wildboar/acse/src/lib/modules/ACSE-1/Mechanism-name.ta';
import {
    Authentication_value,
    _decode_Authentication_value,
    _encode_Authentication_value,
} from '@wildboar/acse/src/lib/modules/ACSE-1/Authentication-value.ta';
export {
    Authentication_value,
    _decode_Authentication_value,
    _encode_Authentication_value,
} from '@wildboar/acse/src/lib/modules/ACSE-1/Authentication-value.ta';
import {
    Default_P_context,
    _decode_Default_P_context,
    _encode_Default_P_context,
} from '../Connectionless-ACSE-1/Default-P-context.ta';
export {
    Default_P_context,
    _decode_Default_P_context,
    _encode_Default_P_context,
} from '../Connectionless-ACSE-1/Default-P-context.ta';

/* START_OF_SYMBOL_DEFINITION AUDT_apdu */
/**
 * @summary AUDT_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AUDT-apdu ::= [APPLICATION 0] IMPLICIT SEQUENCE {
 *   protocol-version
 *     [0] IMPLICIT BIT STRING {version1(0)} DEFAULT {version1},
 *   aSO-context                   [1]  ASO-context-name OPTIONAL,
 *   called-AP-title               [2]  AP-title OPTIONAL,
 *   called-AE-qualifier           [3]  AE-qualifier OPTIONAL,
 *   called-AP-invocation-id       [4]  AP-invocation-id OPTIONAL,
 *   called-AE-invocation-id       [5]  AE-invocation-id OPTIONAL,
 *   calling-AP-title              [6]  AP-title OPTIONAL,
 *   calling-AE-qualifier          [7]  AE-qualifier OPTIONAL,
 *   calling-AP-invocation-id      [8]  AP-invocation-id OPTIONAL,
 *   calling-AE-invocation-id      [9]  AE-invocation-id OPTIONAL,
 *   -- The following field shall only be used if the Authentication functional unit is selected.
 *   mechanism-name                [11] IMPLICIT Mechanism-name OPTIONAL,
 *   -- The following field shall only be used if the Authentication functional unit is selected.
 *   calling-authentication-value  [12] EXPLICIT Authentication-value OPTIONAL,
 *   p-context                     [14] IMPLICIT Default-P-context OPTIONAL,
 *   implementation-information    [29] IMPLICIT GraphicString OPTIONAL,
 *   ...,
 *   ...,
 *   user-information
 *     [30] IMPLICIT SEQUENCE SIZE (1, ..., 0 | 2..MAX) OF EXTERNAL
 * }
 * ```
 *
 * @class
 */
export class AUDT_apdu {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<AUDT_apdu_protocol_version>,
        /**
         * @summary `aSO_context`.
         * @public
         * @readonly
         */
        readonly aSO_context: OPTIONAL<ASO_context_name>,
        /**
         * @summary `called_AP_title`.
         * @public
         * @readonly
         */
        readonly called_AP_title: OPTIONAL<AP_title>,
        /**
         * @summary `called_AE_qualifier`.
         * @public
         * @readonly
         */
        readonly called_AE_qualifier: OPTIONAL<AE_qualifier>,
        /**
         * @summary `called_AP_invocation_id`.
         * @public
         * @readonly
         */
        readonly called_AP_invocation_id: OPTIONAL<AP_invocation_id>,
        /**
         * @summary `called_AE_invocation_id`.
         * @public
         * @readonly
         */
        readonly called_AE_invocation_id: OPTIONAL<AE_invocation_id>,
        /**
         * @summary `calling_AP_title`.
         * @public
         * @readonly
         */
        readonly calling_AP_title: OPTIONAL<AP_title>,
        /**
         * @summary `calling_AE_qualifier`.
         * @public
         * @readonly
         */
        readonly calling_AE_qualifier: OPTIONAL<AE_qualifier>,
        /**
         * @summary `calling_AP_invocation_id`.
         * @public
         * @readonly
         */
        readonly calling_AP_invocation_id: OPTIONAL<AP_invocation_id>,
        /**
         * @summary `calling_AE_invocation_id`.
         * @public
         * @readonly
         */
        readonly calling_AE_invocation_id: OPTIONAL<AE_invocation_id>,
        /**
         * @summary `mechanism_name`.
         * @public
         * @readonly
         */
        readonly mechanism_name: OPTIONAL<Mechanism_name>,
        /**
         * @summary `calling_authentication_value`.
         * @public
         * @readonly
         */
        readonly calling_authentication_value: OPTIONAL<Authentication_value>,
        /**
         * @summary `p_context`.
         * @public
         * @readonly
         */
        readonly p_context: OPTIONAL<Default_P_context>,
        /**
         * @summary `implementation_information`.
         * @public
         * @readonly
         */
        readonly implementation_information: OPTIONAL<GraphicString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `user_information`.
         * @public
         * @readonly
         */
        readonly user_information: EXTERNAL[]
    ) {}

    /**
     * @summary Restructures an object into a AUDT_apdu
     * @description
     *
     * This takes an `object` and converts it to a `AUDT_apdu`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AUDT_apdu`.
     * @returns {AUDT_apdu}
     */
    public static _from_object(
        _o: { [_K in keyof AUDT_apdu]: AUDT_apdu[_K] }
    ): AUDT_apdu {
        return new AUDT_apdu(
            _o.protocol_version,
            _o.aSO_context,
            _o.called_AP_title,
            _o.called_AE_qualifier,
            _o.called_AP_invocation_id,
            _o.called_AE_invocation_id,
            _o.calling_AP_title,
            _o.calling_AE_qualifier,
            _o.calling_AP_invocation_id,
            _o.calling_AE_invocation_id,
            _o.mechanism_name,
            _o.calling_authentication_value,
            _o.p_context,
            _o.implementation_information,
            _o._unrecognizedExtensionsList,
            _o.user_information
        );
    }

    /**
     * @summary Getter that returns the default value for `protocol_version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_protocol_version() {
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[AUDT_apdu_protocol_version_version1] = TRUE_BIT;
            return _ret;
        })();
    }
}
/* END_OF_SYMBOL_DEFINITION AUDT_apdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AUDT_apdu */
/**
 * @summary The Leading Root Component Types of AUDT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AUDT_apdu: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'protocol-version',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'aSO-context',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'called-AP-title',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'called-AE-qualifier',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'called-AP-invocation-id',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'called-AE-invocation-id',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'calling-AP-title',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'calling-AE-qualifier',
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'calling-AP-invocation-id',
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'calling-AE-invocation-id',
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'mechanism-name',
        true,
        $.hasTag(_TagClass.context, 11),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'calling-authentication-value',
        true,
        $.hasTag(_TagClass.context, 12),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'p-context',
        true,
        $.hasTag(_TagClass.context, 14),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'implementation-information',
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AUDT_apdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AUDT_apdu */
/**
 * @summary The Trailing Root Component Types of AUDT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AUDT_apdu: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'user-information',
        false,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AUDT_apdu */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AUDT_apdu */
/**
 * @summary The Extension Addition Component Types of AUDT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AUDT_apdu: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AUDT_apdu */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AUDT_apdu */
let _cached_decoder_for_AUDT_apdu: $.ASN1Decoder<AUDT_apdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AUDT_apdu */

/* START_OF_SYMBOL_DEFINITION _decode_AUDT_apdu */
/**
 * @summary Decodes an ASN.1 element into a(n) AUDT_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AUDT_apdu} The decoded data structure.
 */
export function _decode_AUDT_apdu(el: _Element) {
    if (!_cached_decoder_for_AUDT_apdu) {
        _cached_decoder_for_AUDT_apdu = $._decode_implicit<AUDT_apdu>(
            () =>
                function (el: _Element): AUDT_apdu {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let protocol_version: OPTIONAL<AUDT_apdu_protocol_version> =
                        AUDT_apdu._default_value_for_protocol_version;
                    let aSO_context: OPTIONAL<ASO_context_name>;
                    let called_AP_title: OPTIONAL<AP_title>;
                    let called_AE_qualifier: OPTIONAL<AE_qualifier>;
                    let called_AP_invocation_id: OPTIONAL<AP_invocation_id>;
                    let called_AE_invocation_id: OPTIONAL<AE_invocation_id>;
                    let calling_AP_title: OPTIONAL<AP_title>;
                    let calling_AE_qualifier: OPTIONAL<AE_qualifier>;
                    let calling_AP_invocation_id: OPTIONAL<AP_invocation_id>;
                    let calling_AE_invocation_id: OPTIONAL<AE_invocation_id>;
                    let mechanism_name: OPTIONAL<Mechanism_name>;
                    let calling_authentication_value: OPTIONAL<Authentication_value>;
                    let p_context: OPTIONAL<Default_P_context>;
                    let implementation_information: OPTIONAL<GraphicString>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    let user_information!: EXTERNAL[];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        'protocol-version': (_el: _Element): void => {
                            protocol_version = $._decode_implicit<AUDT_apdu_protocol_version>(
                                () => _decode_AUDT_apdu_protocol_version
                            )(_el);
                        },
                        'aSO-context': (_el: _Element): void => {
                            aSO_context = $._decode_explicit<ASO_context_name>(
                                () => _decode_ASO_context_name
                            )(_el);
                        },
                        'called-AP-title': (_el: _Element): void => {
                            called_AP_title = $._decode_explicit<AP_title>(
                                () => _decode_AP_title
                            )(_el);
                        },
                        'called-AE-qualifier': (_el: _Element): void => {
                            called_AE_qualifier = $._decode_explicit<AE_qualifier>(
                                () => _decode_AE_qualifier
                            )(_el);
                        },
                        'called-AP-invocation-id': (_el: _Element): void => {
                            called_AP_invocation_id = $._decode_explicit<AP_invocation_id>(
                                () => _decode_AP_invocation_id
                            )(_el);
                        },
                        'called-AE-invocation-id': (_el: _Element): void => {
                            called_AE_invocation_id = $._decode_explicit<AE_invocation_id>(
                                () => _decode_AE_invocation_id
                            )(_el);
                        },
                        'calling-AP-title': (_el: _Element): void => {
                            calling_AP_title = $._decode_explicit<AP_title>(
                                () => _decode_AP_title
                            )(_el);
                        },
                        'calling-AE-qualifier': (_el: _Element): void => {
                            calling_AE_qualifier = $._decode_explicit<AE_qualifier>(
                                () => _decode_AE_qualifier
                            )(_el);
                        },
                        'calling-AP-invocation-id': (_el: _Element): void => {
                            calling_AP_invocation_id = $._decode_explicit<AP_invocation_id>(
                                () => _decode_AP_invocation_id
                            )(_el);
                        },
                        'calling-AE-invocation-id': (_el: _Element): void => {
                            calling_AE_invocation_id = $._decode_explicit<AE_invocation_id>(
                                () => _decode_AE_invocation_id
                            )(_el);
                        },
                        'mechanism-name': (_el: _Element): void => {
                            mechanism_name = $._decode_implicit<Mechanism_name>(
                                () => _decode_Mechanism_name
                            )(_el);
                        },
                        'calling-authentication-value': (
                            _el: _Element
                        ): void => {
                            calling_authentication_value = $._decode_explicit<Authentication_value>(
                                () => _decode_Authentication_value
                            )(_el);
                        },
                        'p-context': (_el: _Element): void => {
                            p_context = $._decode_implicit<Default_P_context>(
                                () => _decode_Default_P_context
                            )(_el);
                        },
                        'implementation-information': (_el: _Element): void => {
                            implementation_information = $._decode_implicit<GraphicString>(
                                () => $._decodeGraphicString
                            )(_el);
                        },
                        'user-information': (_el: _Element): void => {
                            user_information = $._decode_implicit<EXTERNAL[]>(
                                () =>
                                    $._decodeSequenceOf<EXTERNAL>(
                                        () => $._decodeExternal
                                    )
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_AUDT_apdu,
                        _extension_additions_list_spec_for_AUDT_apdu,
                        _root_component_type_list_2_spec_for_AUDT_apdu,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new AUDT_apdu /* SEQUENCE_CONSTRUCTOR_CALL */(
                        protocol_version,
                        aSO_context,
                        called_AP_title,
                        called_AE_qualifier,
                        called_AP_invocation_id,
                        called_AE_invocation_id,
                        calling_AP_title,
                        calling_AE_qualifier,
                        calling_AP_invocation_id,
                        calling_AE_invocation_id,
                        mechanism_name,
                        calling_authentication_value,
                        p_context,
                        implementation_information,
                        _unrecognizedExtensionsList,
                        user_information
                    );
                }
        );
    }
    return _cached_decoder_for_AUDT_apdu(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AUDT_apdu */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AUDT_apdu */
let _cached_encoder_for_AUDT_apdu: $.ASN1Encoder<AUDT_apdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AUDT_apdu */

/* START_OF_SYMBOL_DEFINITION _encode_AUDT_apdu */
/**
 * @summary Encodes a(n) AUDT_apdu into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AUDT_apdu, encoded as an ASN.1 Element.
 */
export function _encode_AUDT_apdu(
    value: AUDT_apdu,
    elGetter: $.ASN1Encoder<AUDT_apdu>
) {
    if (!_cached_encoder_for_AUDT_apdu) {
        _cached_encoder_for_AUDT_apdu = $._encode_implicit(
            _TagClass.application,
            0,
            () =>
                function (
                    value: AUDT_apdu,
                    elGetter: $.ASN1Encoder<AUDT_apdu>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* IF_DEFAULT */ value.protocol_version ===
                                        undefined ||
                                    $.deepEq(
                                        value.protocol_version,
                                        AUDT_apdu._default_value_for_protocol_version
                                    )
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              0,
                                              () =>
                                                  _encode_AUDT_apdu_protocol_version,
                                              $.BER
                                          )(value.protocol_version, $.BER),
                                    /* IF_ABSENT  */ value.aSO_context ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              1,
                                              () => _encode_ASO_context_name,
                                              $.BER
                                          )(value.aSO_context, $.BER),
                                    /* IF_ABSENT  */ value.called_AP_title ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              2,
                                              () => _encode_AP_title,
                                              $.BER
                                          )(value.called_AP_title, $.BER),
                                    /* IF_ABSENT  */ value.called_AE_qualifier ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              3,
                                              () => _encode_AE_qualifier,
                                              $.BER
                                          )(value.called_AE_qualifier, $.BER),
                                    /* IF_ABSENT  */ value.called_AP_invocation_id ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              4,
                                              () => _encode_AP_invocation_id,
                                              $.BER
                                          )(
                                              value.called_AP_invocation_id,
                                              $.BER
                                          ),
                                    /* IF_ABSENT  */ value.called_AE_invocation_id ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              5,
                                              () => _encode_AE_invocation_id,
                                              $.BER
                                          )(
                                              value.called_AE_invocation_id,
                                              $.BER
                                          ),
                                    /* IF_ABSENT  */ value.calling_AP_title ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              6,
                                              () => _encode_AP_title,
                                              $.BER
                                          )(value.calling_AP_title, $.BER),
                                    /* IF_ABSENT  */ value.calling_AE_qualifier ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              7,
                                              () => _encode_AE_qualifier,
                                              $.BER
                                          )(value.calling_AE_qualifier, $.BER),
                                    /* IF_ABSENT  */ value.calling_AP_invocation_id ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              8,
                                              () => _encode_AP_invocation_id,
                                              $.BER
                                          )(
                                              value.calling_AP_invocation_id,
                                              $.BER
                                          ),
                                    /* IF_ABSENT  */ value.calling_AE_invocation_id ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              9,
                                              () => _encode_AE_invocation_id,
                                              $.BER
                                          )(
                                              value.calling_AE_invocation_id,
                                              $.BER
                                          ),
                                    /* IF_ABSENT  */ value.mechanism_name ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              11,
                                              () => _encode_Mechanism_name,
                                              $.BER
                                          )(value.mechanism_name, $.BER),
                                    /* IF_ABSENT  */ value.calling_authentication_value ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              12,
                                              () =>
                                                  _encode_Authentication_value,
                                              $.BER
                                          )(
                                              value.calling_authentication_value,
                                              $.BER
                                          ),
                                    /* IF_ABSENT  */ value.p_context ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              14,
                                              () => _encode_Default_P_context,
                                              $.BER
                                          )(value.p_context, $.BER),
                                    /* IF_ABSENT  */ value.implementation_information ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              29,
                                              () => $._encodeGraphicString,
                                              $.BER
                                          )(
                                              value.implementation_information,
                                              $.BER
                                          ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : [],
                                [
                                    /* REQUIRED   */ $._encode_implicit(
                                        _TagClass.context,
                                        30,
                                        () =>
                                            $._encodeSequenceOf<EXTERNAL>(
                                                () => $._encodeExternal,
                                                $.BER
                                            ),
                                        $.BER
                                    )(value.user_information, $.BER),
                                ]
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_AUDT_apdu(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AUDT_apdu */

/* eslint-enable */

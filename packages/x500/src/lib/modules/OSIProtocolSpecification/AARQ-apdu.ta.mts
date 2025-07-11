/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    TRUE_BIT,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
import {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
import {
    AARQ_apdu_protocol_version,
    AARQ_apdu_protocol_version_version1 /* IMPORTED_LONG_NAMED_BIT */,
    _decode_AARQ_apdu_protocol_version,
    _encode_AARQ_apdu_protocol_version,
} from "../OSIProtocolSpecification/AARQ-apdu-protocol-version.ta.mjs";
import {
    AE_invocation_identifier,
    _decode_AE_invocation_identifier,
    _encode_AE_invocation_identifier,
} from "../OSIProtocolSpecification/AE-invocation-identifier.ta.mjs";
import {
    AP_invocation_identifier,
    _decode_AP_invocation_identifier,
    _encode_AP_invocation_identifier,
} from "../OSIProtocolSpecification/AP-invocation-identifier.ta.mjs";
import {
    Application_context_name,
    _decode_Application_context_name,
    _encode_Application_context_name,
} from "../OSIProtocolSpecification/Application-context-name.ta.mjs";
import {
    Association_informationBind,
    _decode_Association_informationBind,
    _encode_Association_informationBind,
} from "../OSIProtocolSpecification/Association-informationBind.ta.mjs";
import {
    Implementation_data,
    _decode_Implementation_data,
    _encode_Implementation_data,
} from "../OSIProtocolSpecification/Implementation-data.ta.mjs";
/**
 * @summary AARQ_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARQ-apdu{APPLICATION-CONTEXT:Protocols} ::= [APPLICATION 0] IMPLICIT SEQUENCE {
 *   protocol-version                  [0] IMPLICIT BIT STRING {version1(0)}
 *                                              DEFAULT {version1},
 *   application-context-name          [1]  Application-context-name,
 *   called-AP-title                   [2]  Name OPTIONAL,
 *   called-AE-qualifier               [3]  RelativeDistinguishedName    OPTIONAL,
 *   called-AP-invocation-identifier   [4]  AP-invocation-identifier     OPTIONAL,
 *   called-AE-invocation-identifier   [5]  AE-invocation-identifier     OPTIONAL,
 *   calling-AP-title                  [6]  Name                         OPTIONAL,
 *   calling-AE-qualifier              [7]  RelativeDistinguishedName    OPTIONAL,
 *   calling-AP-invocation-identifier  [8]  AP-invocation-identifier     OPTIONAL,
 *   calling-AE-invocation-identifier  [9]  AE-invocation-identifier     OPTIONAL,
 *   implementation-information        [29] IMPLICIT Implementation-data OPTIONAL,
 *   user-information                  [30] IMPLICIT
 *                                            Association-informationBind{{Protocols}}}
 * ```
 *
 */
export class AARQ_apdu {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<AARQ_apdu_protocol_version>,
        /**
         * @summary `application_context_name`.
         * @public
         * @readonly
         */
        readonly application_context_name: Application_context_name,
        /**
         * @summary `called_AP_title`.
         * @public
         * @readonly
         */
        readonly called_AP_title: OPTIONAL<Name>,
        /**
         * @summary `called_AE_qualifier`.
         * @public
         * @readonly
         */
        readonly called_AE_qualifier: OPTIONAL<RelativeDistinguishedName>,
        /**
         * @summary `called_AP_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly called_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>,
        /**
         * @summary `called_AE_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly called_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>,
        /**
         * @summary `calling_AP_title`.
         * @public
         * @readonly
         */
        readonly calling_AP_title: OPTIONAL<Name>,
        /**
         * @summary `calling_AE_qualifier`.
         * @public
         * @readonly
         */
        readonly calling_AE_qualifier: OPTIONAL<RelativeDistinguishedName>,
        /**
         * @summary `calling_AP_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly calling_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>,
        /**
         * @summary `calling_AE_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly calling_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>,
        /**
         * @summary `implementation_information`.
         * @public
         * @readonly
         */
        readonly implementation_information: OPTIONAL<Implementation_data>,
        /**
         * @summary `user_information`.
         * @public
         * @readonly
         */
        readonly user_information: Association_informationBind
    ) {}

    /**
     * @summary Restructures an object into a AARQ_apdu
     * @description
     *
     * This takes an `object` and converts it to a `AARQ_apdu`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AARQ_apdu`.
     * @returns {AARQ_apdu}
     */
    public static _from_object(
        _o: { [_K in keyof AARQ_apdu]: AARQ_apdu[_K] }
    ): AARQ_apdu {
        return new AARQ_apdu(
            _o.protocol_version,
            _o.application_context_name,
            _o.called_AP_title,
            _o.called_AE_qualifier,
            _o.called_AP_invocation_identifier,
            _o.called_AE_invocation_identifier,
            _o.calling_AP_title,
            _o.calling_AE_qualifier,
            _o.calling_AP_invocation_identifier,
            _o.calling_AE_invocation_identifier,
            _o.implementation_information,
            _o.user_information
        );
    }

    /**
     * @summary Getter that returns the default value for `protocol_version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_protocol_version(): AARQ_apdu_protocol_version {
        return (() => {
            const _ret = new Uint8ClampedArray(1);
            _ret[AARQ_apdu_protocol_version_version1] = TRUE_BIT;
            return _ret;
        })();
    }
}

/**
 * @summary The Leading Root Component Types of AARQ_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AARQ_apdu: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocol-version",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "application-context-name",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "called-AP-title",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "called-AE-qualifier",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "called-AP-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        "called-AE-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        "calling-AP-title",
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        "calling-AE-qualifier",
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        "calling-AP-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        "calling-AE-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 9)
    ),
    new $.ComponentSpec(
        "implementation-information",
        true,
        $.hasTag(_TagClass.context, 29)
    ),
    new $.ComponentSpec(
        "user-information",
        false,
        $.hasTag(_TagClass.context, 30)
    ),
];

/**
 * @summary The Trailing Root Component Types of AARQ_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AARQ_apdu: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AARQ_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AARQ_apdu: $.ComponentSpec[] = [];

let _cached_decoder_for_AARQ_apdu: $.ASN1Decoder<AARQ_apdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AARQ_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AARQ_apdu} The decoded data structure.
 */
export function _decode_AARQ_apdu(el: _Element): AARQ_apdu {
    if (!_cached_decoder_for_AARQ_apdu) {
        _cached_decoder_for_AARQ_apdu = $._decode_implicit<AARQ_apdu>(
            () =>
                function (el: _Element): AARQ_apdu {
                    let protocol_version: OPTIONAL<AARQ_apdu_protocol_version> =
                        AARQ_apdu._default_value_for_protocol_version;
                    let application_context_name!: Application_context_name;
                    let called_AP_title: OPTIONAL<Name>;
                    let called_AE_qualifier: OPTIONAL<RelativeDistinguishedName>;
                    let called_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>;
                    let called_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>;
                    let calling_AP_title: OPTIONAL<Name>;
                    let calling_AE_qualifier: OPTIONAL<RelativeDistinguishedName>;
                    let calling_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>;
                    let calling_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>;
                    let implementation_information: OPTIONAL<Implementation_data>;
                    let user_information!: Association_informationBind;
                    const callbacks: $.DecodingMap = {
                        "protocol-version": (_el: _Element): void => {
                            protocol_version = $._decode_implicit<AARQ_apdu_protocol_version>(
                                () => _decode_AARQ_apdu_protocol_version
                            )(_el);
                        },
                        "application-context-name": (_el: _Element): void => {
                            application_context_name = $._decode_explicit<Application_context_name>(
                                () => _decode_Application_context_name
                            )(_el);
                        },
                        "called-AP-title": (_el: _Element): void => {
                            called_AP_title = $._decode_explicit<Name>(
                                () => _decode_Name
                            )(_el);
                        },
                        "called-AE-qualifier": (_el: _Element): void => {
                            called_AE_qualifier = $._decode_explicit<RelativeDistinguishedName>(
                                () => _decode_RelativeDistinguishedName
                            )(_el);
                        },
                        "called-AP-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            called_AP_invocation_identifier = $._decode_explicit<AP_invocation_identifier>(
                                () => _decode_AP_invocation_identifier
                            )(_el);
                        },
                        "called-AE-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            called_AE_invocation_identifier = $._decode_explicit<AE_invocation_identifier>(
                                () => _decode_AE_invocation_identifier
                            )(_el);
                        },
                        "calling-AP-title": (_el: _Element): void => {
                            calling_AP_title = $._decode_explicit<Name>(
                                () => _decode_Name
                            )(_el);
                        },
                        "calling-AE-qualifier": (_el: _Element): void => {
                            calling_AE_qualifier = $._decode_explicit<RelativeDistinguishedName>(
                                () => _decode_RelativeDistinguishedName
                            )(_el);
                        },
                        "calling-AP-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            calling_AP_invocation_identifier = $._decode_explicit<AP_invocation_identifier>(
                                () => _decode_AP_invocation_identifier
                            )(_el);
                        },
                        "calling-AE-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            calling_AE_invocation_identifier = $._decode_explicit<AE_invocation_identifier>(
                                () => _decode_AE_invocation_identifier
                            )(_el);
                        },
                        "implementation-information": (_el: _Element): void => {
                            implementation_information = $._decode_implicit<Implementation_data>(
                                () => _decode_Implementation_data
                            )(_el);
                        },
                        "user-information": (_el: _Element): void => {
                            user_information = $._decode_implicit<Association_informationBind>(
                                () => _decode_Association_informationBind
                            )(_el);
                        },
                    };
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_AARQ_apdu,
                        _extension_additions_list_spec_for_AARQ_apdu,
                        _root_component_type_list_2_spec_for_AARQ_apdu,
                        undefined
                    );
                    return new AARQ_apdu(
                        protocol_version,
                        application_context_name,
                        called_AP_title,
                        called_AE_qualifier,
                        called_AP_invocation_identifier,
                        called_AE_invocation_identifier,
                        calling_AP_title,
                        calling_AE_qualifier,
                        calling_AP_invocation_identifier,
                        calling_AE_invocation_identifier,
                        implementation_information,
                        user_information
                    );
                }
        );
    }
    return _cached_decoder_for_AARQ_apdu(el);
}

let _cached_encoder_for_AARQ_apdu: $.ASN1Encoder<AARQ_apdu> | null = null;

/**
 * @summary Encodes a(n) AARQ_apdu into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AARQ_apdu, encoded as an ASN.1 Element.
 */
export function _encode_AARQ_apdu(
    value: AARQ_apdu,
    elGetter: $.ASN1Encoder<AARQ_apdu>
): _Element {
    if (!_cached_encoder_for_AARQ_apdu) {
        _cached_encoder_for_AARQ_apdu = $._encode_implicit(
            _TagClass.application,
            0,
            () =>
                function (
                    value: AARQ_apdu                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_DEFAULT */ value.protocol_version ===
                                    undefined ||
                                $.deepEq(
                                    value.protocol_version,
                                    AARQ_apdu._default_value_for_protocol_version
                                )
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          0,
                                          () =>
                                              _encode_AARQ_apdu_protocol_version,
                                          $.DER
                                      )(value.protocol_version, $.DER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    1,
                                    () => _encode_Application_context_name,
                                    $.DER
                                )(value.application_context_name, $.DER),
                                /* IF_ABSENT  */ value.called_AP_title ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          2,
                                          () => _encode_Name,
                                          $.DER
                                      )(value.called_AP_title, $.DER),
                                /* IF_ABSENT  */ value.called_AE_qualifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          3,
                                          () =>
                                              _encode_RelativeDistinguishedName,
                                          $.DER
                                      )(value.called_AE_qualifier, $.DER),
                                /* IF_ABSENT  */ value.called_AP_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          4,
                                          () =>
                                              _encode_AP_invocation_identifier,
                                          $.DER
                                      )(
                                          value.called_AP_invocation_identifier,
                                          $.DER
                                      ),
                                /* IF_ABSENT  */ value.called_AE_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          5,
                                          () =>
                                              _encode_AE_invocation_identifier,
                                          $.DER
                                      )(
                                          value.called_AE_invocation_identifier,
                                          $.DER
                                      ),
                                /* IF_ABSENT  */ value.calling_AP_title ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          6,
                                          () => _encode_Name,
                                          $.DER
                                      )(value.calling_AP_title, $.DER),
                                /* IF_ABSENT  */ value.calling_AE_qualifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          7,
                                          () =>
                                              _encode_RelativeDistinguishedName,
                                          $.DER
                                      )(value.calling_AE_qualifier, $.DER),
                                /* IF_ABSENT  */ value.calling_AP_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          8,
                                          () =>
                                              _encode_AP_invocation_identifier,
                                          $.DER
                                      )(
                                          value.calling_AP_invocation_identifier,
                                          $.DER
                                      ),
                                /* IF_ABSENT  */ value.calling_AE_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          9,
                                          () =>
                                              _encode_AE_invocation_identifier,
                                          $.DER
                                      )(
                                          value.calling_AE_invocation_identifier,
                                          $.DER
                                      ),
                                /* IF_ABSENT  */ value.implementation_information ===
                                undefined
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          29,
                                          () => _encode_Implementation_data,
                                          $.DER
                                      )(
                                          value.implementation_information,
                                          $.DER
                                      ),
                                /* REQUIRED   */ $._encode_implicit(
                                    _TagClass.context,
                                    30,
                                    () => _encode_Association_informationBind,
                                    $.DER
                                )(value.user_information, $.DER),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.DER
                    );
                },
            $.DER
        );
    }
    return _cached_encoder_for_AARQ_apdu(value, elGetter);
}


/* eslint-enable */

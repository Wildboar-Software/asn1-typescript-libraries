/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    TRUE_BIT,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
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
    AAREerr_apdu_protocol_version,
    AAREerr_apdu_protocol_version_version1 /* IMPORTED_LONG_NAMED_BIT */,
    _decode_AAREerr_apdu_protocol_version,
    _encode_AAREerr_apdu_protocol_version,
} from "../OSIProtocolSpecification/AAREerr-apdu-protocol-version.ta.mjs";
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
    Associate_result,
    _decode_Associate_result,
    _encode_Associate_result,
} from "../OSIProtocolSpecification/Associate-result.ta.mjs";
import {
    Associate_source_diagnostic,
    _decode_Associate_source_diagnostic,
    _encode_Associate_source_diagnostic,
} from "../OSIProtocolSpecification/Associate-source-diagnostic.ta.mjs";
import {
    Association_informationBindErr,
    _decode_Association_informationBindErr,
    _encode_Association_informationBindErr,
} from "../OSIProtocolSpecification/Association-informationBindErr.ta.mjs";
import {
    Implementation_data,
    _decode_Implementation_data,
    _encode_Implementation_data,
} from "../OSIProtocolSpecification/Implementation-data.ta.mjs";
/**
 * @summary AAREerr_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AAREerr-apdu{APPLICATION-CONTEXT:Protocols} ::= [APPLICATION 1] IMPLICIT SEQUENCE {
 *   protocol-version                    [0]  IMPLICIT BIT STRING {version1(0)}
 *                                              DEFAULT {version1},
 *   application-context-name            [1]  Application-context-name,
 *   result                              [2]  Associate-result
 *                                              (rejected-permanent..rejected-transient),
 *   result-source-diagnostic            [3]  Associate-source-diagnostic,
 *   responding-AP-title                 [4]  Name OPTIONAL,
 *   responding-AE-qualifier             [5]  RelativeDistinguishedName OPTIONAL,
 *   responding-AP-invocation-identifier [6]  AP-invocation-identifier  OPTIONAL,
 *   responding-AE-invocation-identifier [7]  AE-invocation-identifier  OPTIONAL,
 *   implementation-information          [29] IMPLICIT Implementation-data OPTIONAL,
 *   user-information                    [30] IMPLICIT
 *                                 Association-informationBindErr{{Protocols}} OPTIONAL }
 * ```
 *
 * @class
 */
export class AAREerr_apdu {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<AAREerr_apdu_protocol_version>,
        /**
         * @summary `application_context_name`.
         * @public
         * @readonly
         */
        readonly application_context_name: Application_context_name,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: Associate_result,
        /**
         * @summary `result_source_diagnostic`.
         * @public
         * @readonly
         */
        readonly result_source_diagnostic: Associate_source_diagnostic,
        /**
         * @summary `responding_AP_title`.
         * @public
         * @readonly
         */
        readonly responding_AP_title?: OPTIONAL<Name>,
        /**
         * @summary `responding_AE_qualifier`.
         * @public
         * @readonly
         */
        readonly responding_AE_qualifier?: OPTIONAL<RelativeDistinguishedName>,
        /**
         * @summary `responding_AP_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly responding_AP_invocation_identifier?: OPTIONAL<AP_invocation_identifier>,
        /**
         * @summary `responding_AE_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly responding_AE_invocation_identifier?: OPTIONAL<AE_invocation_identifier>,
        /**
         * @summary `implementation_information`.
         * @public
         * @readonly
         */
        readonly implementation_information?: OPTIONAL<Implementation_data>,
        /**
         * @summary `user_information`.
         * @public
         * @readonly
         */
        readonly user_information?: OPTIONAL<Association_informationBindErr>
    ) {}

    /**
     * @summary Restructures an object into a AAREerr_apdu
     * @description
     *
     * This takes an `object` and converts it to a `AAREerr_apdu`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AAREerr_apdu`.
     * @returns {AAREerr_apdu}
     */
    public static _from_object(
        _o: { [_K in keyof AAREerr_apdu]: AAREerr_apdu[_K] }
    ): AAREerr_apdu {
        return new AAREerr_apdu(
            _o.protocol_version,
            _o.application_context_name,
            _o.result,
            _o.result_source_diagnostic,
            _o.responding_AP_title,
            _o.responding_AE_qualifier,
            _o.responding_AP_invocation_identifier,
            _o.responding_AE_invocation_identifier,
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
    public static get _default_value_for_protocol_version() {
        return (() => {
            const _ret = new Uint8ClampedArray(1);
            _ret[AAREerr_apdu_protocol_version_version1] = TRUE_BIT;
            return _ret;
        })();
    }
}

/**
 * @summary The Leading Root Component Types of AAREerr_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AAREerr_apdu: $.ComponentSpec[] = [
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
        "result",
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "result-source-diagnostic",
        false,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "responding-AP-title",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        "responding-AE-qualifier",
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        "responding-AP-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        "responding-AE-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        "implementation-information",
        true,
        $.hasTag(_TagClass.context, 29)
    ),
    new $.ComponentSpec(
        "user-information",
        true,
        $.hasTag(_TagClass.context, 30)
    ),
];

/**
 * @summary The Trailing Root Component Types of AAREerr_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AAREerr_apdu: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AAREerr_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AAREerr_apdu: $.ComponentSpec[] = [];

let _cached_decoder_for_AAREerr_apdu: $.ASN1Decoder<AAREerr_apdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AAREerr_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AAREerr_apdu} The decoded data structure.
 */
export function _decode_AAREerr_apdu(el: _Element) {
    if (!_cached_decoder_for_AAREerr_apdu) {
        _cached_decoder_for_AAREerr_apdu = $._decode_implicit<AAREerr_apdu>(
            () =>
                function (el: _Element): AAREerr_apdu {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let protocol_version: OPTIONAL<AAREerr_apdu_protocol_version> =
                        AAREerr_apdu._default_value_for_protocol_version;
                    let application_context_name!: Application_context_name;
                    let result!: Associate_result;
                    let result_source_diagnostic!: Associate_source_diagnostic;
                    let responding_AP_title: OPTIONAL<Name>;
                    let responding_AE_qualifier: OPTIONAL<RelativeDistinguishedName>;
                    let responding_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>;
                    let responding_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>;
                    let implementation_information: OPTIONAL<Implementation_data>;
                    let user_information: OPTIONAL<Association_informationBindErr>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        "protocol-version": (_el: _Element): void => {
                            protocol_version = $._decode_implicit<AAREerr_apdu_protocol_version>(
                                () => _decode_AAREerr_apdu_protocol_version
                            )(_el);
                        },
                        "application-context-name": (_el: _Element): void => {
                            application_context_name = $._decode_explicit<Application_context_name>(
                                () => _decode_Application_context_name
                            )(_el);
                        },
                        result: (_el: _Element): void => {
                            result = $._decode_explicit<Associate_result>(
                                () => _decode_Associate_result
                            )(_el);
                        },
                        "result-source-diagnostic": (_el: _Element): void => {
                            result_source_diagnostic = $._decode_explicit<Associate_source_diagnostic>(
                                () => _decode_Associate_source_diagnostic
                            )(_el);
                        },
                        "responding-AP-title": (_el: _Element): void => {
                            responding_AP_title = $._decode_explicit<Name>(
                                () => _decode_Name
                            )(_el);
                        },
                        "responding-AE-qualifier": (_el: _Element): void => {
                            responding_AE_qualifier = $._decode_explicit<RelativeDistinguishedName>(
                                () => _decode_RelativeDistinguishedName
                            )(_el);
                        },
                        "responding-AP-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            responding_AP_invocation_identifier = $._decode_explicit<AP_invocation_identifier>(
                                () => _decode_AP_invocation_identifier
                            )(_el);
                        },
                        "responding-AE-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            responding_AE_invocation_identifier = $._decode_explicit<AE_invocation_identifier>(
                                () => _decode_AE_invocation_identifier
                            )(_el);
                        },
                        "implementation-information": (_el: _Element): void => {
                            implementation_information = $._decode_implicit<Implementation_data>(
                                () => _decode_Implementation_data
                            )(_el);
                        },
                        "user-information": (_el: _Element): void => {
                            user_information = $._decode_implicit<Association_informationBindErr>(
                                () => _decode_Association_informationBindErr
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_AAREerr_apdu,
                        _extension_additions_list_spec_for_AAREerr_apdu,
                        _root_component_type_list_2_spec_for_AAREerr_apdu,
                        undefined
                    );
                    return new AAREerr_apdu(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ protocol_version,
                        application_context_name,
                        result,
                        result_source_diagnostic,
                        responding_AP_title,
                        responding_AE_qualifier,
                        responding_AP_invocation_identifier,
                        responding_AE_invocation_identifier,
                        implementation_information,
                        user_information
                    );
                }
        );
    }
    return _cached_decoder_for_AAREerr_apdu(el);
}

let _cached_encoder_for_AAREerr_apdu: $.ASN1Encoder<AAREerr_apdu> | null = null;

/**
 * @summary Encodes a(n) AAREerr_apdu into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AAREerr_apdu, encoded as an ASN.1 Element.
 */
export function _encode_AAREerr_apdu(
    value: AAREerr_apdu,
    elGetter: $.ASN1Encoder<AAREerr_apdu>
) {
    if (!_cached_encoder_for_AAREerr_apdu) {
        _cached_encoder_for_AAREerr_apdu = $._encode_implicit(
            _TagClass.application,
            1,
            () =>
                function (
                    value: AAREerr_apdu                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_DEFAULT */ value.protocol_version ===
                                    undefined ||
                                $.deepEq(
                                    value.protocol_version,
                                    AAREerr_apdu._default_value_for_protocol_version
                                )
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          0,
                                          () =>
                                              _encode_AAREerr_apdu_protocol_version,
                                          $.DER
                                      )(value.protocol_version, $.DER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    1,
                                    () => _encode_Application_context_name,
                                    $.DER
                                )(value.application_context_name, $.DER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    2,
                                    () => _encode_Associate_result,
                                    $.DER
                                )(value.result, $.DER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    3,
                                    () => _encode_Associate_source_diagnostic,
                                    $.DER
                                )(value.result_source_diagnostic, $.DER),
                                /* IF_ABSENT  */ value.responding_AP_title ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          4,
                                          () => _encode_Name,
                                          $.DER
                                      )(value.responding_AP_title, $.DER),
                                /* IF_ABSENT  */ value.responding_AE_qualifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          5,
                                          () =>
                                              _encode_RelativeDistinguishedName,
                                          $.DER
                                      )(value.responding_AE_qualifier, $.DER),
                                /* IF_ABSENT  */ value.responding_AP_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          6,
                                          () =>
                                              _encode_AP_invocation_identifier,
                                          $.DER
                                      )(
                                          value.responding_AP_invocation_identifier,
                                          $.DER
                                      ),
                                /* IF_ABSENT  */ value.responding_AE_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          7,
                                          () =>
                                              _encode_AE_invocation_identifier,
                                          $.DER
                                      )(
                                          value.responding_AE_invocation_identifier,
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
                                /* IF_ABSENT  */ value.user_information ===
                                undefined
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          30,
                                          () =>
                                              _encode_Association_informationBindErr,
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
    return _cached_encoder_for_AAREerr_apdu(value, elGetter);
}


/* eslint-enable */

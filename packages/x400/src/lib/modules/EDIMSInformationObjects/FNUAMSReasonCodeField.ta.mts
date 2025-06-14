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
    FNUAMSBasicCodeField,
    _decode_FNUAMSBasicCodeField,
    _encode_FNUAMSBasicCodeField,
} from '../EDIMSInformationObjects/FNUAMSBasicCodeField.ta.mjs';
import {
    FNUAMSDiagnosticField,
    _decode_FNUAMSDiagnosticField,
    _encode_FNUAMSDiagnosticField,
} from '../EDIMSInformationObjects/FNUAMSDiagnosticField.ta.mjs';
import {
    FNUAMSSecurityCheckField,
    _decode_FNUAMSSecurityCheckField,
    _encode_FNUAMSSecurityCheckField,
} from '../EDIMSInformationObjects/FNUAMSSecurityCheckField.ta.mjs';
/* START_OF_SYMBOL_DEFINITION FNUAMSReasonCodeField */
/**
 * @summary FNUAMSReasonCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNUAMSReasonCodeField ::= SEQUENCE {
 *   fn-ua-ms-basic-code  [0]  FNUAMSBasicCodeField,
 *   fn-ua-ms-diagnostic  [1]  FNUAMSDiagnosticField OPTIONAL,
 *   fn-security-check    [2]  FNUAMSSecurityCheckField DEFAULT FALSE
 * }
 * ```
 *
 * @class
 */
export class FNUAMSReasonCodeField {
    constructor(
        /**
         * @summary `fn_ua_ms_basic_code`.
         * @public
         * @readonly
         */
        readonly fn_ua_ms_basic_code: FNUAMSBasicCodeField,
        /**
         * @summary `fn_ua_ms_diagnostic`.
         * @public
         * @readonly
         */
        readonly fn_ua_ms_diagnostic: OPTIONAL<FNUAMSDiagnosticField>,
        /**
         * @summary `fn_security_check`.
         * @public
         * @readonly
         */
        readonly fn_security_check: OPTIONAL<FNUAMSSecurityCheckField>
    ) {}

    /**
     * @summary Restructures an object into a FNUAMSReasonCodeField
     * @description
     *
     * This takes an `object` and converts it to a `FNUAMSReasonCodeField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FNUAMSReasonCodeField`.
     * @returns {FNUAMSReasonCodeField}
     */
    public static _from_object(
        _o: { [_K in keyof FNUAMSReasonCodeField]: FNUAMSReasonCodeField[_K] }
    ): FNUAMSReasonCodeField {
        return new FNUAMSReasonCodeField(
            _o.fn_ua_ms_basic_code,
            _o.fn_ua_ms_diagnostic,
            _o.fn_security_check
        );
    }

    /**
     * @summary Getter that returns the default value for `fn_security_check`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_fn_security_check() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION FNUAMSReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FNUAMSReasonCodeField */
/**
 * @summary The Leading Root Component Types of FNUAMSReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FNUAMSReasonCodeField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'fn-ua-ms-basic-code',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'fn-ua-ms-diagnostic',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'fn-security-check',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FNUAMSReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FNUAMSReasonCodeField */
/**
 * @summary The Trailing Root Component Types of FNUAMSReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FNUAMSReasonCodeField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FNUAMSReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FNUAMSReasonCodeField */
/**
 * @summary The Extension Addition Component Types of FNUAMSReasonCodeField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FNUAMSReasonCodeField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FNUAMSReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUAMSReasonCodeField */
let _cached_decoder_for_FNUAMSReasonCodeField: $.ASN1Decoder<FNUAMSReasonCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUAMSReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_FNUAMSReasonCodeField */
/**
 * @summary Decodes an ASN.1 element into a(n) FNUAMSReasonCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FNUAMSReasonCodeField} The decoded data structure.
 */
export function _decode_FNUAMSReasonCodeField(el: _Element) {
    if (!_cached_decoder_for_FNUAMSReasonCodeField) {
        _cached_decoder_for_FNUAMSReasonCodeField = function (
            el: _Element
        ): FNUAMSReasonCodeField {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let fn_ua_ms_basic_code!: FNUAMSBasicCodeField;
            let fn_ua_ms_diagnostic: OPTIONAL<FNUAMSDiagnosticField>;
            let fn_security_check: OPTIONAL<FNUAMSSecurityCheckField> =
                FNUAMSReasonCodeField._default_value_for_fn_security_check;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'fn-ua-ms-basic-code': (_el: _Element): void => {
                    fn_ua_ms_basic_code = $._decode_implicit<FNUAMSBasicCodeField>(
                        () => _decode_FNUAMSBasicCodeField
                    )(_el);
                },
                'fn-ua-ms-diagnostic': (_el: _Element): void => {
                    fn_ua_ms_diagnostic = $._decode_implicit<FNUAMSDiagnosticField>(
                        () => _decode_FNUAMSDiagnosticField
                    )(_el);
                },
                'fn-security-check': (_el: _Element): void => {
                    fn_security_check = $._decode_implicit<FNUAMSSecurityCheckField>(
                        () => _decode_FNUAMSSecurityCheckField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FNUAMSReasonCodeField,
                _extension_additions_list_spec_for_FNUAMSReasonCodeField,
                _root_component_type_list_2_spec_for_FNUAMSReasonCodeField,
                undefined
            );
            return new FNUAMSReasonCodeField /* SEQUENCE_CONSTRUCTOR_CALL */(
                fn_ua_ms_basic_code,
                fn_ua_ms_diagnostic,
                fn_security_check
            );
        };
    }
    return _cached_decoder_for_FNUAMSReasonCodeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FNUAMSReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUAMSReasonCodeField */
let _cached_encoder_for_FNUAMSReasonCodeField: $.ASN1Encoder<FNUAMSReasonCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUAMSReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_FNUAMSReasonCodeField */
/**
 * @summary Encodes a(n) FNUAMSReasonCodeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FNUAMSReasonCodeField, encoded as an ASN.1 Element.
 */
export function _encode_FNUAMSReasonCodeField(
    value: FNUAMSReasonCodeField,
    elGetter: $.ASN1Encoder<FNUAMSReasonCodeField>
) {
    if (!_cached_encoder_for_FNUAMSReasonCodeField) {
        _cached_encoder_for_FNUAMSReasonCodeField = function (
            value: FNUAMSReasonCodeField        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_FNUAMSBasicCodeField,
                            $.BER
                        )(value.fn_ua_ms_basic_code, $.BER),
                        /* IF_ABSENT  */ value.fn_ua_ms_diagnostic === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_FNUAMSDiagnosticField,
                                  $.BER
                              )(value.fn_ua_ms_diagnostic, $.BER),
                        /* IF_DEFAULT */ value.fn_security_check ===
                            undefined ||
                        $.deepEq(
                            value.fn_security_check,
                            FNUAMSReasonCodeField._default_value_for_fn_security_check
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_FNUAMSSecurityCheckField,
                                  $.BER
                              )(value.fn_security_check, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_FNUAMSReasonCodeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FNUAMSReasonCodeField */

/* eslint-enable */

/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from './SchemeName.ta.mjs';


/**
 * @summary PatientIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PatientIdentification ::= SEQUENCE {
 *   scheme        PATIENT-SCHEME.&id ({PatientSchemes}),
 *   schemeName    PATIENT-SCHEME.&name ({PatientSchemes}{@.scheme}) OPTIONAL,
 *   patientId     PATIENT-SCHEME.&Identification ({PatientSchemes}{@.scheme}) }
 * ```
 *
 * @class
 */
export class PatientIdentification {
    constructor(
        /**
         * @summary `scheme`.
         * @public
         * @readonly
         */
        readonly scheme: OBJECT_IDENTIFIER,
        /**
         * @summary `schemeName`.
         * @public
         * @readonly
         */
        readonly schemeName: OPTIONAL<SchemeName>,
        /**
         * @summary `patientId`.
         * @public
         * @readonly
         */
        readonly patientId: _Element
    ) {}

    /**
     * @summary Restructures an object into a PatientIdentification
     * @description
     *
     * This takes an `object` and converts it to a `PatientIdentification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PatientIdentification`.
     * @returns {PatientIdentification}
     */
    public static _from_object(
        _o: { [_K in keyof PatientIdentification]: PatientIdentification[_K] }
    ): PatientIdentification {
        return new PatientIdentification(
            _o.scheme,
            _o.schemeName,
            _o.patientId
        );
    }
}


/**
 * @summary The Leading Root Component Types of PatientIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PatientIdentification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'scheme',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'schemeName',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'patientId',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of PatientIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PatientIdentification: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PatientIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PatientIdentification: $.ComponentSpec[] = [];


let _cached_decoder_for_PatientIdentification: $.ASN1Decoder<PatientIdentification> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PatientIdentification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PatientIdentification} The decoded data structure.
 */
export function _decode_PatientIdentification(el: _Element) {
    if (!_cached_decoder_for_PatientIdentification) {
        _cached_decoder_for_PatientIdentification = function (
            el: _Element
        ): PatientIdentification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let scheme!: OBJECT_IDENTIFIER;
            let schemeName: OPTIONAL<SchemeName>;
            let patientId!: _Element;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                scheme: (_el: _Element): void => {
                    scheme = $._decodeObjectIdentifier(_el);
                },
                schemeName: (_el: _Element): void => {
                    schemeName = _decode_SchemeName(_el);
                },
                patientId: (_el: _Element): void => {
                    patientId = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PatientIdentification,
                _extension_additions_list_spec_for_PatientIdentification,
                _root_component_type_list_2_spec_for_PatientIdentification,
                undefined
            );
            return new PatientIdentification /* SEQUENCE_CONSTRUCTOR_CALL */(
                scheme,
                schemeName,
                patientId
            );
        };
    }
    return _cached_decoder_for_PatientIdentification(el);
}


let _cached_encoder_for_PatientIdentification: $.ASN1Encoder<PatientIdentification> | null = null;


/**
 * @summary Encodes a(n) PatientIdentification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PatientIdentification, encoded as an ASN.1 Element.
 */
export function _encode_PatientIdentification(
    value: PatientIdentification,
    elGetter: $.ASN1Encoder<PatientIdentification>
) {
    if (!_cached_encoder_for_PatientIdentification) {
        _cached_encoder_for_PatientIdentification = function (
            value: PatientIdentification        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.scheme,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.schemeName === undefined
                            ? undefined
                            : _encode_SchemeName(value.schemeName, $.BER),
                        /* REQUIRED   */ $._encodeAny(value.patientId, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PatientIdentification(value, elGetter);
}


/* eslint-enable */

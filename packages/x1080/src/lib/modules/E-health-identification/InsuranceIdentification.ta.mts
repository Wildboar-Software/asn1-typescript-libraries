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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from './SchemeName.ta.mjs';


/**
 * @summary InsuranceIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InsuranceIdentification ::= SEQUENCE {
 *   scheme         INSURANCE-SCHEME.&id({InsuranceSchemes}),
 *   schemeName     INSURANCE-SCHEME.&name ({InsuranceSchemes}{@.scheme}) OPTIONAL,
 *   manufacturerId INSURANCE-SCHEME.&Company ({InsuranceSchemes}{@.scheme}),
 *   insurance      INSURANCE-SCHEME.&InsuranceType ({InsuranceSchemes}{@.scheme}),
 *   insuranceCert  INSURANCE-SCHEME.&Certification ({InsuranceSchemes}{@.scheme})}
 * ```
 *
 * @class
 */
export class InsuranceIdentification {
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
         * @summary `manufacturerId`.
         * @public
         * @readonly
         */
        readonly manufacturerId: _Element,
        /**
         * @summary `insurance`.
         * @public
         * @readonly
         */
        readonly insurance: _Element,
        /**
         * @summary `insuranceCert`.
         * @public
         * @readonly
         */
        readonly insuranceCert: _Element
    ) {}

    /**
     * @summary Restructures an object into a InsuranceIdentification
     * @description
     *
     * This takes an `object` and converts it to a `InsuranceIdentification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InsuranceIdentification`.
     * @returns {InsuranceIdentification}
     */
    public static _from_object(
        _o: {
            [_K in keyof InsuranceIdentification]: InsuranceIdentification[_K];
        }
    ): InsuranceIdentification {
        return new InsuranceIdentification(
            _o.scheme,
            _o.schemeName,
            _o.manufacturerId,
            _o.insurance,
            _o.insuranceCert
        );
    }
}


/**
 * @summary The Leading Root Component Types of InsuranceIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InsuranceIdentification: $.ComponentSpec[] = [
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
        'manufacturerId',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'insurance',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'insuranceCert',
        false,
        $.hasTag(_TagClass.context, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of InsuranceIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InsuranceIdentification: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of InsuranceIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InsuranceIdentification: $.ComponentSpec[] = [];


let _cached_decoder_for_InsuranceIdentification: $.ASN1Decoder<InsuranceIdentification> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) InsuranceIdentification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InsuranceIdentification} The decoded data structure.
 */
export function _decode_InsuranceIdentification(el: _Element) {
    if (!_cached_decoder_for_InsuranceIdentification) {
        _cached_decoder_for_InsuranceIdentification = function (
            el: _Element
        ): InsuranceIdentification {
            let scheme!: OBJECT_IDENTIFIER;
            let schemeName: OPTIONAL<SchemeName>;
            let manufacturerId!: _Element;
            let insurance!: _Element;
            let insuranceCert!: _Element;
            const callbacks: $.DecodingMap = {
                scheme: (_el: _Element): void => {
                    scheme = $._decodeObjectIdentifier(_el);
                },
                schemeName: (_el: _Element): void => {
                    schemeName = _decode_SchemeName(_el);
                },
                manufacturerId: (_el: _Element): void => {
                    manufacturerId = $._decodeAny(_el);
                },
                insurance: (_el: _Element): void => {
                    insurance = $._decodeAny(_el);
                },
                insuranceCert: (_el: _Element): void => {
                    insuranceCert = $._decodeAny(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_InsuranceIdentification,
                _extension_additions_list_spec_for_InsuranceIdentification,
                _root_component_type_list_2_spec_for_InsuranceIdentification,
                undefined
            );
            return new InsuranceIdentification (
                scheme,
                schemeName,
                manufacturerId,
                insurance,
                insuranceCert
            );
        };
    }
    return _cached_decoder_for_InsuranceIdentification(el);
}


let _cached_encoder_for_InsuranceIdentification: $.ASN1Encoder<InsuranceIdentification> | null = null;


/**
 * @summary Encodes a(n) InsuranceIdentification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InsuranceIdentification, encoded as an ASN.1 Element.
 */
export function _encode_InsuranceIdentification(
    value: InsuranceIdentification,
    elGetter: $.ASN1Encoder<InsuranceIdentification>
) {
    if (!_cached_encoder_for_InsuranceIdentification) {
        _cached_encoder_for_InsuranceIdentification = function (
            value: InsuranceIdentification        ): _Element {
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
                        /* REQUIRED   */ $._encodeAny(
                            value.manufacturerId,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.insurance, $.BER),
                        /* REQUIRED   */ $._encodeAny(
                            value.insuranceCert,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_InsuranceIdentification(value, elGetter);
}


/* eslint-enable */

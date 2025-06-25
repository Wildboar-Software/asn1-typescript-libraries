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
 * @summary LaboratoryIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LaboratoryIdentification ::= SEQUENCE {
 *   scheme         LABORATORY-SCHEME.&id ({LaboratorySchemes}),
 *   schemeName     LABORATORY-SCHEME.&name ({LaboratorySchemes}{@.scheme})
 *                  OPTIONAL,
 *   qualifications LABORATORY-SCHEME.&Qualifications
 *                  ({LaboratorySchemes}{@.scheme}) OPTIONAL}
 * ```
 *
 * @class
 */
export class LaboratoryIdentification {
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
         * @summary `qualifications`.
         * @public
         * @readonly
         */
        readonly qualifications: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a LaboratoryIdentification
     * @description
     *
     * This takes an `object` and converts it to a `LaboratoryIdentification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LaboratoryIdentification`.
     * @returns {LaboratoryIdentification}
     */
    public static _from_object(
        _o: {
            [_K in keyof LaboratoryIdentification]: LaboratoryIdentification[_K];
        }
    ): LaboratoryIdentification {
        return new LaboratoryIdentification(
            _o.scheme,
            _o.schemeName,
            _o.qualifications
        );
    }
}


/**
 * @summary The Leading Root Component Types of LaboratoryIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LaboratoryIdentification: $.ComponentSpec[] = [
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
        'qualifications',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of LaboratoryIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LaboratoryIdentification: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of LaboratoryIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LaboratoryIdentification: $.ComponentSpec[] = [];


let _cached_decoder_for_LaboratoryIdentification: $.ASN1Decoder<LaboratoryIdentification> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) LaboratoryIdentification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LaboratoryIdentification} The decoded data structure.
 */
export function _decode_LaboratoryIdentification(el: _Element): LaboratoryIdentification {
    if (!_cached_decoder_for_LaboratoryIdentification) {
        _cached_decoder_for_LaboratoryIdentification = function (
            el: _Element
        ): LaboratoryIdentification {
            let scheme!: OBJECT_IDENTIFIER;
            let schemeName: OPTIONAL<SchemeName>;
            let qualifications: OPTIONAL<_Element>;
            const callbacks: $.DecodingMap = {
                scheme: (_el: _Element): void => {
                    scheme = $._decodeObjectIdentifier(_el);
                },
                schemeName: (_el: _Element): void => {
                    schemeName = _decode_SchemeName(_el);
                },
                qualifications: (_el: _Element): void => {
                    qualifications = $._decodeAny(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LaboratoryIdentification,
                _extension_additions_list_spec_for_LaboratoryIdentification,
                _root_component_type_list_2_spec_for_LaboratoryIdentification,
                undefined
            );
            return new LaboratoryIdentification (
                scheme,
                schemeName,
                qualifications
            );
        };
    }
    return _cached_decoder_for_LaboratoryIdentification(el);
}


let _cached_encoder_for_LaboratoryIdentification: $.ASN1Encoder<LaboratoryIdentification> | null = null;


/**
 * @summary Encodes a(n) LaboratoryIdentification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LaboratoryIdentification, encoded as an ASN.1 Element.
 */
export function _encode_LaboratoryIdentification(
    value: LaboratoryIdentification,
    elGetter: $.ASN1Encoder<LaboratoryIdentification>
): _Element {
    if (!_cached_encoder_for_LaboratoryIdentification) {
        _cached_encoder_for_LaboratoryIdentification = function (
            value: LaboratoryIdentification        ): _Element {
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
                        /* IF_ABSENT  */ value.qualifications === undefined
                            ? undefined
                            : $._encodeAny(value.qualifications, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LaboratoryIdentification(value, elGetter);
}


/* eslint-enable */

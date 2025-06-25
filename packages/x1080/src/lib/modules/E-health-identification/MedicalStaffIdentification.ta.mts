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
 * @summary MedicalStaffIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MedicalStaffIdentification ::= SEQUENCE {
 *   scheme          MEDICAL-STAFF-SCHEME.&id ({MedicalStaffSchemes}),
 *   schemeName      MEDICAL-STAFF-SCHEME.&name
 *                   ({MedicalStaffSchemes}{@.scheme}) OPTIONAL,
 *   medicalStaffId  MEDICAL-STAFF-SCHEME.&Identification
 *                   ({MedicalStaffSchemes}{@.scheme}),
 *   qualifications  MEDICAL-STAFF-SCHEME.&Qualifications
 *                  ({MedicalStaffSchemes}{@.scheme}) OPTIONAL}
 * ```
 *
 * @class
 */
export class MedicalStaffIdentification {
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
         * @summary `medicalStaffId`.
         * @public
         * @readonly
         */
        readonly medicalStaffId: _Element,
        /**
         * @summary `qualifications`.
         * @public
         * @readonly
         */
        readonly qualifications: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a MedicalStaffIdentification
     * @description
     *
     * This takes an `object` and converts it to a `MedicalStaffIdentification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MedicalStaffIdentification`.
     * @returns {MedicalStaffIdentification}
     */
    public static _from_object(
        _o: {
            [_K in keyof MedicalStaffIdentification]: MedicalStaffIdentification[_K];
        }
    ): MedicalStaffIdentification {
        return new MedicalStaffIdentification(
            _o.scheme,
            _o.schemeName,
            _o.medicalStaffId,
            _o.qualifications
        );
    }
}


/**
 * @summary The Leading Root Component Types of MedicalStaffIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MedicalStaffIdentification: $.ComponentSpec[] = [
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
        'medicalStaffId',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'qualifications',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];


/**
 * @summary The Trailing Root Component Types of MedicalStaffIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MedicalStaffIdentification: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of MedicalStaffIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MedicalStaffIdentification: $.ComponentSpec[] = [];


let _cached_decoder_for_MedicalStaffIdentification: $.ASN1Decoder<MedicalStaffIdentification> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MedicalStaffIdentification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MedicalStaffIdentification} The decoded data structure.
 */
export function _decode_MedicalStaffIdentification(el: _Element): MedicalStaffIdentification {
    if (!_cached_decoder_for_MedicalStaffIdentification) {
        _cached_decoder_for_MedicalStaffIdentification = function (
            el: _Element
        ): MedicalStaffIdentification {
            let scheme!: OBJECT_IDENTIFIER;
            let schemeName: OPTIONAL<SchemeName>;
            let medicalStaffId!: _Element;
            let qualifications: OPTIONAL<_Element>;
            const callbacks: $.DecodingMap = {
                scheme: (_el: _Element): void => {
                    scheme = $._decodeObjectIdentifier(_el);
                },
                schemeName: (_el: _Element): void => {
                    schemeName = _decode_SchemeName(_el);
                },
                medicalStaffId: (_el: _Element): void => {
                    medicalStaffId = $._decodeAny(_el);
                },
                qualifications: (_el: _Element): void => {
                    qualifications = $._decodeAny(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MedicalStaffIdentification,
                _extension_additions_list_spec_for_MedicalStaffIdentification,
                _root_component_type_list_2_spec_for_MedicalStaffIdentification,
                undefined
            );
            return new MedicalStaffIdentification (
                scheme,
                schemeName,
                medicalStaffId,
                qualifications
            );
        };
    }
    return _cached_decoder_for_MedicalStaffIdentification(el);
}


let _cached_encoder_for_MedicalStaffIdentification: $.ASN1Encoder<MedicalStaffIdentification> | null = null;


/**
 * @summary Encodes a(n) MedicalStaffIdentification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MedicalStaffIdentification, encoded as an ASN.1 Element.
 */
export function _encode_MedicalStaffIdentification(
    value: MedicalStaffIdentification,
    elGetter: $.ASN1Encoder<MedicalStaffIdentification>
): _Element {
    if (!_cached_encoder_for_MedicalStaffIdentification) {
        _cached_encoder_for_MedicalStaffIdentification = function (
            value: MedicalStaffIdentification        ): _Element {
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
                            value.medicalStaffId,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.qualifications === undefined
                            ? undefined
                            : $._encodeAny(value.qualifications, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MedicalStaffIdentification(value, elGetter);
}


/* eslint-enable */

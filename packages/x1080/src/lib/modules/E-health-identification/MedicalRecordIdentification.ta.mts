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
 * @summary MedicalRecordIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MedicalRecordIdentification ::= SEQUENCE {
 *   scheme       MEDICAL-RECORD-SCHEME.&id ({MedicalRecordSchemes}),
 *   schemeName   MEDICAL-RECORD-SCHEME.&name ({MedicalRecordSchemes}{@.scheme}) OPTIONAL,
 *   definingOrg  MEDICAL-RECORD-SCHEME.&Organisation ({MedicalRecordSchemes}{@.scheme}),
 *   recordType   MEDICAL-RECORD-SCHEME.&RecordType ({MedicalRecordSchemes}{@.scheme}),
 *   record       MEDICAL-RECORD-SCHEME.&Record ({MedicalRecordSchemes}{@.scheme})}
 * ```
 *
 */
export class MedicalRecordIdentification {
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
         * @summary `definingOrg`.
         * @public
         * @readonly
         */
        readonly definingOrg: _Element,
        /**
         * @summary `recordType`.
         * @public
         * @readonly
         */
        readonly recordType: _Element,
        /**
         * @summary `record`.
         * @public
         * @readonly
         */
        readonly record: _Element
    ) {}

    /**
     * @summary Restructures an object into a MedicalRecordIdentification
     * @description
     *
     * This takes an `object` and converts it to a `MedicalRecordIdentification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MedicalRecordIdentification`.
     * @returns {MedicalRecordIdentification}
     */
    public static _from_object(
        _o: {
            [_K in keyof MedicalRecordIdentification]: MedicalRecordIdentification[_K];
        }
    ): MedicalRecordIdentification {
        return new MedicalRecordIdentification(
            _o.scheme,
            _o.schemeName,
            _o.definingOrg,
            _o.recordType,
            _o.record
        );
    }
}


/**
 * @summary The Leading Root Component Types of MedicalRecordIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MedicalRecordIdentification: $.ComponentSpec[] = [
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
        'definingOrg',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'recordType',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'record',
        false,
        $.hasTag(_TagClass.context, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of MedicalRecordIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MedicalRecordIdentification: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of MedicalRecordIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MedicalRecordIdentification: $.ComponentSpec[] = [];


let _cached_decoder_for_MedicalRecordIdentification: $.ASN1Decoder<MedicalRecordIdentification> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MedicalRecordIdentification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MedicalRecordIdentification} The decoded data structure.
 */
export function _decode_MedicalRecordIdentification(el: _Element): MedicalRecordIdentification {
    if (!_cached_decoder_for_MedicalRecordIdentification) {
        _cached_decoder_for_MedicalRecordIdentification = function (
            el: _Element
        ): MedicalRecordIdentification {
            let scheme!: OBJECT_IDENTIFIER;
            let schemeName: OPTIONAL<SchemeName>;
            let definingOrg!: _Element;
            let recordType!: _Element;
            let record!: _Element;
            const callbacks: $.DecodingMap = {
                scheme: (_el: _Element): void => {
                    scheme = $._decodeObjectIdentifier(_el);
                },
                schemeName: (_el: _Element): void => {
                    schemeName = _decode_SchemeName(_el);
                },
                definingOrg: (_el: _Element): void => {
                    definingOrg = $._decodeAny(_el);
                },
                recordType: (_el: _Element): void => {
                    recordType = $._decodeAny(_el);
                },
                record: (_el: _Element): void => {
                    record = $._decodeAny(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MedicalRecordIdentification,
                _extension_additions_list_spec_for_MedicalRecordIdentification,
                _root_component_type_list_2_spec_for_MedicalRecordIdentification,
                undefined
            );
            return new MedicalRecordIdentification (
                scheme,
                schemeName,
                definingOrg,
                recordType,
                record
            );
        };
    }
    return _cached_decoder_for_MedicalRecordIdentification(el);
}


let _cached_encoder_for_MedicalRecordIdentification: $.ASN1Encoder<MedicalRecordIdentification> | null = null;


/**
 * @summary Encodes a(n) MedicalRecordIdentification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MedicalRecordIdentification, encoded as an ASN.1 Element.
 */
export function _encode_MedicalRecordIdentification(
    value: MedicalRecordIdentification,
    elGetter: $.ASN1Encoder<MedicalRecordIdentification>
): _Element {
    if (!_cached_encoder_for_MedicalRecordIdentification) {
        _cached_encoder_for_MedicalRecordIdentification = function (
            value: MedicalRecordIdentification        ): _Element {
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
                        /* REQUIRED   */ $._encodeAny(value.definingOrg, $.BER),
                        /* REQUIRED   */ $._encodeAny(value.recordType, $.BER),
                        /* REQUIRED   */ $._encodeAny(value.record, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MedicalRecordIdentification(value, elGetter);
}


/* eslint-enable */

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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from './SchemeName.ta.mjs';


/**
 * @summary ObserverIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObserverIdentification ::= SEQUENCE {
 *   scheme      MEDICAL-STAFF-SCHEME.&id ({MedicalStaffSchemes}),
 *   schemeName  MEDICAL-STAFF-SCHEME.&name ({MedicalStaffSchemes}{@.scheme})
 *               OPTIONAL,
 *   observerId  MEDICAL-STAFF-SCHEME.&Observer ({MedicalStaffSchemes}{@.scheme})}
 * ```
 *
 * @class
 */
export class ObserverIdentification {
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
         * @summary `observerId`.
         * @public
         * @readonly
         */
        readonly observerId: _Element
    ) {}

    /**
     * @summary Restructures an object into a ObserverIdentification
     * @description
     *
     * This takes an `object` and converts it to a `ObserverIdentification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObserverIdentification`.
     * @returns {ObserverIdentification}
     */
    public static _from_object(
        _o: { [_K in keyof ObserverIdentification]: ObserverIdentification[_K] }
    ): ObserverIdentification {
        return new ObserverIdentification(
            _o.scheme,
            _o.schemeName,
            _o.observerId
        );
    }
}


/**
 * @summary The Leading Root Component Types of ObserverIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ObserverIdentification: $.ComponentSpec[] = [
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
        'observerId',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of ObserverIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ObserverIdentification: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ObserverIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ObserverIdentification: $.ComponentSpec[] = [];


let _cached_decoder_for_ObserverIdentification: $.ASN1Decoder<ObserverIdentification> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ObserverIdentification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObserverIdentification} The decoded data structure.
 */
export function _decode_ObserverIdentification(el: _Element) {
    if (!_cached_decoder_for_ObserverIdentification) {
        _cached_decoder_for_ObserverIdentification = function (
            el: _Element
        ): ObserverIdentification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let scheme!: OBJECT_IDENTIFIER;
            let schemeName: OPTIONAL<SchemeName>;
            let observerId!: _Element;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                scheme: (_el: _Element): void => {
                    scheme = $._decodeObjectIdentifier(_el);
                },
                schemeName: (_el: _Element): void => {
                    schemeName = _decode_SchemeName(_el);
                },
                observerId: (_el: _Element): void => {
                    observerId = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ObserverIdentification,
                _extension_additions_list_spec_for_ObserverIdentification,
                _root_component_type_list_2_spec_for_ObserverIdentification,
                undefined
            );
            return new ObserverIdentification /* SEQUENCE_CONSTRUCTOR_CALL */(
                scheme,
                schemeName,
                observerId
            );
        };
    }
    return _cached_decoder_for_ObserverIdentification(el);
}


let _cached_encoder_for_ObserverIdentification: $.ASN1Encoder<ObserverIdentification> | null = null;


/**
 * @summary Encodes a(n) ObserverIdentification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObserverIdentification, encoded as an ASN.1 Element.
 */
export function _encode_ObserverIdentification(
    value: ObserverIdentification,
    elGetter: $.ASN1Encoder<ObserverIdentification>
) {
    if (!_cached_encoder_for_ObserverIdentification) {
        _cached_encoder_for_ObserverIdentification = function (
            value: ObserverIdentification        ): _Element {
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
                        /* REQUIRED   */ $._encodeAny(value.observerId, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ObserverIdentification(value, elGetter);
}


/* eslint-enable */

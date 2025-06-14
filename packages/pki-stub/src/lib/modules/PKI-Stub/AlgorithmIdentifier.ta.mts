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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary AlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmIdentifier{ALGORITHM:SupportedAlgorithms} ::= SEQUENCE {
 *   algorithm       ALGORITHM.&id({SupportedAlgorithms}),
 *   parameters      ALGORITHM.&Type({SupportedAlgorithms}{@algorithm}) OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AlgorithmIdentifier {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters?: OPTIONAL<_Element>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AlgorithmIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `AlgorithmIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlgorithmIdentifier`.
     * @returns {AlgorithmIdentifier}
     */
    public static _from_object(
        _o: { [_K in keyof AlgorithmIdentifier]: AlgorithmIdentifier[_K] }
    ): AlgorithmIdentifier {
        return new AlgorithmIdentifier(
            _o.algorithm,
            _o.parameters,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of AlgorithmIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlgorithmIdentifier: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "algorithm",
            false,
            $.hasTag(_TagClass.universal, 6),
            undefined,
            undefined
        ),
        new $.ComponentSpec(
            "parameters",
            true,
            $.hasAnyTag,
            undefined,
            undefined
        ),
    ];

/**
 * @summary The Trailing Root Component Types of AlgorithmIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlgorithmIdentifier: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of AlgorithmIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlgorithmIdentifier: $.ComponentSpec[] =
    [];

/**
 * @summary Decodes an ASN.1 element into a(n) AlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgorithmIdentifier} The decoded data structure.
 */
export function _decode_AlgorithmIdentifier(el: _Element) {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let algorithm!: OBJECT_IDENTIFIER;
    let parameters: OPTIONAL<_Element>;
    let _unrecognizedExtensionsList: _Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        algorithm: (_el: _Element): void => {
            algorithm = $._decodeObjectIdentifier(_el);
        },
        parameters: (_el: _Element): void => {
            parameters = $._decodeAny(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AlgorithmIdentifier,
        _extension_additions_list_spec_for_AlgorithmIdentifier,
        _root_component_type_list_2_spec_for_AlgorithmIdentifier,
        (ext: _Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new AlgorithmIdentifier(
        /* SEQUENCE_CONSTRUCTOR_CALL */ algorithm,
        parameters,
        _unrecognizedExtensionsList
    );
}

/**
 * @summary Encodes a(n) AlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_AlgorithmIdentifier(
    value: AlgorithmIdentifier,
    _elGetter: $.ASN1Encoder<AlgorithmIdentifier>
) {
    const components: _Element[] = [
        /* REQUIRED   */ $._encodeObjectIdentifier(
            value.algorithm,
            $.BER
        ),
    ];
    if (value.parameters) {
        components.push(value.parameters);
    }
    components.push(...value._unrecognizedExtensionsList ?? []);
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */

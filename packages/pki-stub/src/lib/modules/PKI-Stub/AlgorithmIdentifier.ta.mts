/* eslint-disable */
import {
    type OPTIONAL,
    type OBJECT_IDENTIFIER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { compareBytes } from "@wildboar/dn";

/**
 * JSON Encoding Rules encoding of {@link AlgorithmIdentifier}.
 */
export type AlgorithmIdentifierJSON = {
    algorithm: string;
    parameters?: unknown;
};

function parametersEqual(
    a: OPTIONAL<_Element>,
    b: OPTIONAL<_Element>,
): boolean {
    if (a === b) {
        return true;
    }
    if (a === undefined || b === undefined) {
        return false;
    }
    return (a.tagClass === b.tagClass)
        && (a.tagNumber === b.tagNumber)
        && (compareBytes(a.value, b.value) === 0);
}

/**
 * @summary AlgorithmIdentifier
 * @description
 *
 * Identifies a cryptographic algorithm and, when required, its parameters.
 *
 * `parameters` is optional and algorithm-specific (for example an elliptic-curve
 * OID). Some algorithms have no parameters; others (many RSA signature OIDs)
 * require an explicit `NULL`. Omitting `NULL` versus encoding `NULL` is not
 * interchangeable for those OIDs.
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
 */
export class AlgorithmIdentifier {
    /**
     * @summary `algorithm`.
     * @public
     * @readonly
     */
    public readonly algorithm: OBJECT_IDENTIFIER;

    /**
     * @summary `parameters`.
     * @public
     * @readonly
     */
    public readonly parameters?: OPTIONAL<_Element>;

    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor(
        algorithm: OBJECT_IDENTIFIER,
        parameters?: OPTIONAL<_Element>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.algorithm = algorithm;
        this.parameters = parameters;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        _o: {
            algorithm: OBJECT_IDENTIFIER;
            parameters?: OPTIONAL<_Element>;
            _unrecognizedExtensionsList?: _Element[];
        }
    ): AlgorithmIdentifier {
        return new AlgorithmIdentifier(
            _o.algorithm,
            _o.parameters,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Compare this algorithm identifier with another
     * @description
     *
     * The algorithm object identifiers must match. Absent `parameters` match
     * only another absent `parameters`. Present parameters match when tag
     * class, tag number, and content octets are identical.
     *
     * @param other The other algorithm identifier
     * @returns `true` if they match
     * @function
     * @public
     */
    public isEqualTo(other: AlgorithmIdentifier): boolean {
        return this.algorithm.isEqualTo(other.algorithm)
            && parametersEqual(this.parameters, other.parameters);
    }

    /**
     * @summary Convert this `AlgorithmIdentifier` to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * Open-type `parameters` are encoded with {@link _Element.toJSON}. Absent
     * optional components are omitted. Unrecognized extensions are not represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): AlgorithmIdentifierJSON {
        const json: AlgorithmIdentifierJSON = {
            algorithm: this.algorithm.toJSON(),
        };
        if (this.parameters !== undefined) {
            json.parameters = this.parameters.toJSON();
        }
        return json;
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
            $.hasTag(_TagClass.universal, 6)
        ),
        new $.ComponentSpec(
            "parameters",
            true,
            $.hasAnyTag
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
export function _decode_AlgorithmIdentifier(el: _Element): AlgorithmIdentifier {
    const elements = el.sequence;
    if (elements.length < 1) {
        throw new _ConstructionError("AlgorithmIdentifier contained no elements.");
    }
    let [ alg_el, param_el, ...extensions ] = elements;
    return new AlgorithmIdentifier(
        $._decodeObjectIdentifier(alg_el),
        param_el,
        extensions
    );
}

/**
 * @summary Encodes a(n) AlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_AlgorithmIdentifier(value: AlgorithmIdentifier,
    _elGetter: $.ASN1Encoder<AlgorithmIdentifier>): _Element {
    const components: _Element[] = [
        /* REQUIRED   */ $._encodeObjectIdentifier(
            value.algorithm,
            $.DER
        ),
    ];
    if (value.parameters) {
        components.push(value.parameters);
    }
    components.push(...value._unrecognizedExtensionsList ?? []);
    return $._encodeSequence(components, $.DER);
}


/* eslint-enable */

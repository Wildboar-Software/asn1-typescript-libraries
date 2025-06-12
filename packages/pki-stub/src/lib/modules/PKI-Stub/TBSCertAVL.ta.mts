/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import {
    Version,
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Version,
    _encode_Version,
} from "../PKI-Stub/Version.ta.mjs";
import {
    AvlSerialNumber,
    _decode_AvlSerialNumber,
    _encode_AvlSerialNumber,
} from "../PKI-Stub/AvlSerialNumber.ta.mjs";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI-Stub/AlgorithmIdentifier.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../PKI-Stub/Name.ta.mjs";
import {
    TBSCertAVL_entries_Item,
    _decode_TBSCertAVL_entries_Item,
    _encode_TBSCertAVL_entries_Item,
} from "../PKI-Stub/TBSCertAVL-entries-Item.ta.mjs";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "../PKI-Stub/Extensions.ta.mjs";

/* START_OF_SYMBOL_DEFINITION TBSCertAVL */
/**
 * @summary TBSCertAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSCertAVL ::= SEQUENCE {
 *   version               [0]  IMPLICIT Version DEFAULT v1,
 *   serialNumber               AvlSerialNumber OPTIONAL,
 *   signature                  AlgorithmIdentifier {{SupportedAlgorithms}},
 *   issuer                     Name,
 *   constrained                BOOLEAN,
 *   entries                    SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     idType                     CHOICE {
 *       certIdentifier        [0]  PKCertIdentifier,
 *       entityGroup                DistinguishedName, -- only for constrained = FALSE
 *       ... },
 *     scope                 [0]  IMPLICIT ScopeRestrictions OPTIONAL,
 *     entryExtensions       [1]  IMPLICIT Extensions OPTIONAL,
 *     ... },
 *   ...,
 *   ...,
 *   avlExtensions              Extensions OPTIONAL }
 * ```
 *
 * @class
 */
export class TBSCertAVL {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: OPTIONAL<AvlSerialNumber>,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: AlgorithmIdentifier,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `constrained`.
         * @public
         * @readonly
         */
        readonly constrained: BOOLEAN,
        /**
         * @summary `entries`.
         * @public
         * @readonly
         */
        readonly entries: TBSCertAVL_entries_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `avlExtensions`.
         * @public
         * @readonly
         */
        readonly avlExtensions?: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a TBSCertAVL
     * @description
     *
     * This takes an `object` and converts it to a `TBSCertAVL`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSCertAVL`.
     * @returns {TBSCertAVL}
     */
    public static _from_object(
        _o: { [_K in keyof TBSCertAVL]: TBSCertAVL[_K] }
    ): TBSCertAVL {
        return new TBSCertAVL(
            _o.version,
            _o.serialNumber,
            _o.signature,
            _o.issuer,
            _o.constrained,
            _o.entries,
            _o._unrecognizedExtensionsList,
            _o.avlExtensions
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return v1;
    }
}
/* END_OF_SYMBOL_DEFINITION TBSCertAVL */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSCertAVL */
/**
 * @summary The Leading Root Component Types of TBSCertAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSCertAVL: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "version",
            true,
            $.hasTag(_TagClass.context, 0),
            undefined,
            undefined
        ),
        new $.ComponentSpec(
            "serialNumber",
            true,
            $.hasTag(_TagClass.universal, 2),
            undefined,
            undefined
        ),
        new $.ComponentSpec(
            "signature",
            false,
            $.hasTag(_TagClass.universal, 16),
            undefined,
            undefined
        ),
        new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
        new $.ComponentSpec(
            "constrained",
            false,
            $.hasTag(_TagClass.universal, 1),
            undefined,
            undefined
        ),
        new $.ComponentSpec(
            "entries",
            false,
            $.hasTag(_TagClass.universal, 16),
            undefined,
            undefined
        ),
    ];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSCertAVL */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSCertAVL */
/**
 * @summary The Trailing Root Component Types of TBSCertAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSCertAVL: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "avlExtensions",
            true,
            $.hasTag(_TagClass.universal, 16),
            undefined,
            undefined
        ),
    ];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSCertAVL */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSCertAVL */
/**
 * @summary The Extension Addition Component Types of TBSCertAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSCertAVL: $.ComponentSpec[] =
    [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSCertAVL */

/* START_OF_SYMBOL_DEFINITION _decode_TBSCertAVL */
/**
 * @summary Decodes an ASN.1 element into a(n) TBSCertAVL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSCertAVL} The decoded data structure.
 */
export function _decode_TBSCertAVL(el: _Element) {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: OPTIONAL<Version> =
        TBSCertAVL._default_value_for_version;
    let serialNumber: OPTIONAL<AvlSerialNumber>;
    let signature!: AlgorithmIdentifier;
    let issuer!: Name;
    let constrained!: BOOLEAN;
    let entries!: TBSCertAVL_entries_Item[];
    let _unrecognizedExtensionsList: _Element[] = [];
    let avlExtensions: OPTIONAL<Extensions>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        version: (_el: _Element): void => {
            version = $._decode_implicit<Version>(
                () => _decode_Version
            )(_el);
        },
        serialNumber: (_el: _Element): void => {
            serialNumber = _decode_AvlSerialNumber(_el);
        },
        signature: (_el: _Element): void => {
            signature = _decode_AlgorithmIdentifier(_el);
        },
        issuer: (_el: _Element): void => {
            issuer = _decode_Name(_el);
        },
        constrained: (_el: _Element): void => {
            constrained = $._decodeBoolean(_el);
        },
        entries: (_el: _Element): void => {
            entries = $._decodeSequenceOf<TBSCertAVL_entries_Item>(
                () => _decode_TBSCertAVL_entries_Item
            )(_el);
        },
        avlExtensions: (_el: _Element): void => {
            avlExtensions = _decode_Extensions(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_TBSCertAVL,
        _extension_additions_list_spec_for_TBSCertAVL,
        _root_component_type_list_2_spec_for_TBSCertAVL,
        (ext: _Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new TBSCertAVL(
        /* SEQUENCE_CONSTRUCTOR_CALL */ version,
        serialNumber,
        signature,
        issuer,
        constrained,
        entries,
        _unrecognizedExtensionsList,
        avlExtensions
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_TBSCertAVL */

/* START_OF_SYMBOL_DEFINITION _encode_TBSCertAVL */
/**
 * @summary Encodes a(n) TBSCertAVL into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCertAVL, encoded as an ASN.1 Element.
 */
export function _encode_TBSCertAVL(
    value: TBSCertAVL,
    elGetter: $.ASN1Encoder<TBSCertAVL>
) {
    const components: _Element[] = [];
    if (value.version != TBSCertAVL._default_value_for_version) {
        const c = $._encode_implicit(
            _TagClass.context,
            0,
            () => _encode_Version,
            $.BER
        )(value.version, $.BER);
        components.push(c);
    }
    if (value.serialNumber !== undefined) {
        const c = _encode_AvlSerialNumber(value.serialNumber, $.BER);
        components.push(c);
    }
    components.push(_encode_AlgorithmIdentifier(value.signature, $.BER));
    components.push(_encode_Name(value.issuer, $.BER));
    components.push($._encodeBoolean(value.constrained, $.BER));
    components.push($._encodeSequenceOf<TBSCertAVL_entries_Item>(
        () => _encode_TBSCertAVL_entries_Item,
        $.BER
    )(value.entries, $.BER));
    components.push(...value._unrecognizedExtensionsList ?? []);
    if (value.avlExtensions?.length) {
        components.push(_encode_Extensions(value.avlExtensions, $.BER));
    }
    return $._encodeSequence(components, $.BER);
}

/* END_OF_SYMBOL_DEFINITION _encode_TBSCertAVL */

/* eslint-enable */

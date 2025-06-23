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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    TBSCertAVL_entries_Item_idType,
    _decode_TBSCertAVL_entries_Item_idType,
    _encode_TBSCertAVL_entries_Item_idType,
} from "../PKI-Stub/TBSCertAVL-entries-Item-idType.ta.mjs";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "../PKI-Stub/Extensions.ta.mjs";
import {
    ScopeRestrictions,
    _decode_ScopeRestrictions,
    _encode_ScopeRestrictions,
} from "../AuthenticationFramework/ScopeRestrictions.ta.mjs";

/**
 * @summary TBSCertAVL_entries_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSCertAVL-entries-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class TBSCertAVL_entries_Item {
    constructor(
        /**
         * @summary `idType`.
         * @public
         * @readonly
         */
        readonly idType: TBSCertAVL_entries_Item_idType,
        /**
         * @summary `scope`.
         * @public
         * @readonly
         */
        readonly scope?: OPTIONAL<ScopeRestrictions>,
        /**
         * @summary `entryExtensions`.
         * @public
         * @readonly
         */
        readonly entryExtensions?: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TBSCertAVL_entries_Item
     * @description
     *
     * This takes an `object` and converts it to a `TBSCertAVL_entries_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSCertAVL_entries_Item`.
     * @returns {TBSCertAVL_entries_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof TBSCertAVL_entries_Item]: TBSCertAVL_entries_Item[_K];
        }
    ): TBSCertAVL_entries_Item {
        return new TBSCertAVL_entries_Item(
            _o.idType,
            _o.scope,
            _o.entryExtensions,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of TBSCertAVL_entries_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSCertAVL_entries_Item: $.ComponentSpec[] =
    [
        new $.ComponentSpec("idType", false, $.hasAnyTag),
        ,
        /* FIXME: scope COULD_NOT_RESOLVE_TYPE_DEF */ new $.ComponentSpec(
            "entryExtensions",
            true,
            $.hasTag(_TagClass.context, 1)
        ),
    ];

/**
 * @summary The Trailing Root Component Types of TBSCertAVL_entries_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSCertAVL_entries_Item: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of TBSCertAVL_entries_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSCertAVL_entries_Item: $.ComponentSpec[] =
    [];

/**
 * @summary Decodes an ASN.1 element into a(n) TBSCertAVL_entries_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSCertAVL_entries_Item} The decoded data structure.
 */
export function _decode_TBSCertAVL_entries_Item(el: _Element): TBSCertAVL_entries_Item {
    let idType!: TBSCertAVL_entries_Item_idType;
    let scope: OPTIONAL<ScopeRestrictions>;
    let entryExtensions: OPTIONAL<Extensions>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        idType: (_el: _Element): void => {
            idType = _decode_TBSCertAVL_entries_Item_idType(_el);
        },
        scope: (_el: _Element): void => {
            scope = $._decode_implicit<ScopeRestrictions>(
                () => _decode_ScopeRestrictions
            )(_el);
        },
        entryExtensions: (_el: _Element): void => {
            entryExtensions = $._decode_implicit<Extensions>(
                () => _decode_Extensions
            )(_el);
        },
    };
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_TBSCertAVL_entries_Item,
        _extension_additions_list_spec_for_TBSCertAVL_entries_Item,
        _root_component_type_list_2_spec_for_TBSCertAVL_entries_Item,
        (ext: _Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new TBSCertAVL_entries_Item(
        idType,
        scope,
        entryExtensions,
        _unrecognizedExtensionsList
    );
}

/**
 * @summary Encodes a(n) TBSCertAVL_entries_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCertAVL_entries_Item, encoded as an ASN.1 Element.
 */
export function _encode_TBSCertAVL_entries_Item(value: TBSCertAVL_entries_Item): _Element {
    const components: _Element[] = [
        _encode_TBSCertAVL_entries_Item_idType(value.idType, $.BER),
    ];
    if (value.scope) {
        const c = $._encode_implicit(
            _TagClass.context,
            0,
            () => _encode_ScopeRestrictions,
            $.BER
        )(value.scope, $.BER);
        components.push(c);
    }
    if (value.entryExtensions?.length) {
        const c = $._encode_implicit(
            _TagClass.context,
            1,
            () => _encode_Extensions,
            $.BER
        )(value.entryExtensions, $.BER);
        components.push(c);
    }
    components.push(...value._unrecognizedExtensionsList ?? []);
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */

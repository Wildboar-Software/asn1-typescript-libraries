/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { EntryInformation_information_Item, _decode_EntryInformation_information_Item, _encode_EntryInformation_information_Item } from "../DirectoryAbstractService/EntryInformation-information-Item.ta.mjs";
// export { EntryInformation_information_Item, _decode_EntryInformation_information_Item, _encode_EntryInformation_information_Item } from "../DirectoryAbstractService/EntryInformation-information-Item.ta.mjs";


/**
 * @summary EntryInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryInformation ::= SEQUENCE {
 *   name                   Name,
 *   fromEntry              BOOLEAN DEFAULT TRUE,
 *   information
 *     SET SIZE (1..MAX) OF
 *       CHOICE {attributeType  AttributeType,
 *               attribute      Attribute} OPTIONAL,
 *   incompleteEntry        [3]  BOOLEAN DEFAULT FALSE, -- not in 1988-edition systems
 *   partialNameResolution
 *     [4]  BOOLEAN DEFAULT FALSE -- not in 1988 or 1993 edition systems --
 * }
 * ```
 * 
 * @class
 */
export
class EntryInformation {
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: Name;
    /**
     * @summary `fromEntry`.
     * @public
     * @readonly
     */
    readonly fromEntry: OPTIONAL<BOOLEAN>;
    /**
     * @summary `information`.
     * @public
     * @readonly
     */
    readonly information: OPTIONAL<EntryInformation_information_Item[]>;
    /**
     * @summary `incompleteEntry`.
     * @public
     * @readonly
     */
    readonly incompleteEntry: OPTIONAL<BOOLEAN>;
    /**
     * @summary `partialNameResolution`.
     * @public
     * @readonly
     */
    readonly partialNameResolution: OPTIONAL<BOOLEAN>;

    constructor (
        name: Name,
        fromEntry: OPTIONAL<BOOLEAN>,
        information: OPTIONAL<EntryInformation_information_Item[]>,
        incompleteEntry: OPTIONAL<BOOLEAN>,
        partialNameResolution: OPTIONAL<BOOLEAN>
    ) {
        this.name = name;
        this.fromEntry = fromEntry;
        this.information = information;
        this.incompleteEntry = incompleteEntry;
        this.partialNameResolution = partialNameResolution;
    }

    /**
     * @summary Restructures an object into a EntryInformation
     * @description
     * 
     * This takes an `object` and converts it to a `EntryInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryInformation`.
     * @returns {EntryInformation}
     */
    public static _from_object (_o: { [_K in keyof (EntryInformation)]: (EntryInformation)[_K] }): EntryInformation {
        return new EntryInformation(_o.name, _o.fromEntry, _o.information, _o.incompleteEntry, _o.partialNameResolution);
    }

    /**
     * @summary Getter that returns the default value for `fromEntry`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_fromEntry () { return true; }
    /**
     * @summary Getter that returns the default value for `incompleteEntry`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_incompleteEntry () { return false; }
    /**
     * @summary Getter that returns the default value for `partialNameResolution`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_partialNameResolution () { return false; }
}

/**
 * @summary The Leading Root Component Types of EntryInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EntryInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasAnyTag),
    new $.ComponentSpec("fromEntry", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("information", true, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("incompleteEntry", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("partialNameResolution", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of EntryInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EntryInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EntryInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EntryInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EntryInformation: $.ASN1Decoder<EntryInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntryInformation (el: _Element): EntryInformation {
    if (!_cached_decoder_for_EntryInformation) { _cached_decoder_for_EntryInformation = function (el: _Element): EntryInformation {
    let name!: Name;
    let fromEntry: OPTIONAL<BOOLEAN> = EntryInformation._default_value_for_fromEntry;
    let information: OPTIONAL<EntryInformation_information_Item[]>;
    let incompleteEntry: OPTIONAL<BOOLEAN> = EntryInformation._default_value_for_incompleteEntry;
    let partialNameResolution: OPTIONAL<BOOLEAN> = EntryInformation._default_value_for_partialNameResolution;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = _decode_Name(_el); },
        "fromEntry": (_el: _Element): void => { fromEntry = $._decodeBoolean(_el); },
        "information": (_el: _Element): void => { information = $._decodeSetOf<EntryInformation_information_Item>(() => _decode_EntryInformation_information_Item)(_el); },
        "incompleteEntry": (_el: _Element): void => { incompleteEntry = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "partialNameResolution": (_el: _Element): void => { partialNameResolution = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EntryInformation,
        _extension_additions_list_spec_for_EntryInformation,
        _root_component_type_list_2_spec_for_EntryInformation,
        undefined,
    );
    return new EntryInformation(
        name,
        fromEntry,
        information,
        incompleteEntry,
        partialNameResolution
    );
}; }
    return _cached_decoder_for_EntryInformation(el);
}

let _cached_encoder_for_EntryInformation: $.ASN1Encoder<EntryInformation> | null = null;

/**
 * @summary Encodes a(n) EntryInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryInformation, encoded as an ASN.1 Element.
 */
export
function _encode_EntryInformation (value: EntryInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntryInformation) { _cached_encoder_for_EntryInformation = function (value: EntryInformation, elGetter: $.ASN1Encoder<EntryInformation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_Name(value.name, $.BER));
    if (value.fromEntry !== undefined && !$.deepEq(value.fromEntry, EntryInformation._default_value_for_fromEntry)) {
        _components.push(/* IF_DEFAULT */ $._encodeBoolean(value.fromEntry, $.BER));
    }
    if (value.information !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeSetOf<EntryInformation_information_Item>(() => _encode_EntryInformation_information_Item, $.BER)(value.information, $.BER));
    }
    if (value.incompleteEntry !== undefined && !$.deepEq(value.incompleteEntry, EntryInformation._default_value_for_incompleteEntry)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.incompleteEntry, $.BER));
    }
    if (value.partialNameResolution !== undefined && !$.deepEq(value.partialNameResolution, EntryInformation._default_value_for_partialNameResolution)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.partialNameResolution, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EntryInformation(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { PSS1InformationElement, _decode_PSS1InformationElement, _encode_PSS1InformationElement } from "../PSS1-generic-parameters-definition-asn1-97/PSS1InformationElement.ta.mjs";
// export { PSS1InformationElement, _decode_PSS1InformationElement, _encode_PSS1InformationElement } from "../PSS1-generic-parameters-definition-asn1-97/PSS1InformationElement.ta.mjs";
import { PartySubaddress, _decode_PartySubaddress, _encode_PartySubaddress } from "../Addressing-Data-Elements-asn1-97/PartySubaddress.ta.mjs";
// export { PartySubaddress, _decode_PartySubaddress, _encode_PartySubaddress } from "../Addressing-Data-Elements-asn1-97/PartySubaddress.ta.mjs";
import { CcExtension, _decode_CcExtension, _encode_CcExtension } from "../SS-CC-Operations-asn1-97/CcExtension.ta.mjs";
// export { CcExtension, _decode_CcExtension, _encode_CcExtension } from "../SS-CC-Operations-asn1-97/CcExtension.ta.mjs";


/**
 * @summary CcOptionalArg_fullArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CcOptionalArg-fullArg ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class CcOptionalArg_fullArg {
    /**
     * @summary `numberA`.
     * @public
     * @readonly
     */
    readonly numberA: PartyNumber;
    /**
     * @summary `numberB`.
     * @public
     * @readonly
     */
    readonly numberB: PartyNumber;
    /**
     * @summary `service`.
     * @public
     * @readonly
     */
    readonly service: PSS1InformationElement;
    /**
     * @summary `subaddrA`.
     * @public
     * @readonly
     */
    readonly subaddrA: OPTIONAL<PartySubaddress>;
    /**
     * @summary `subaddrB`.
     * @public
     * @readonly
     */
    readonly subaddrB: OPTIONAL<PartySubaddress>;
    /**
     * @summary `extension`.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<CcExtension>;

    constructor (
        numberA: PartyNumber,
        numberB: PartyNumber,
        service: PSS1InformationElement,
        subaddrA: OPTIONAL<PartySubaddress>,
        subaddrB: OPTIONAL<PartySubaddress>,
        extension: OPTIONAL<CcExtension>
    ) {
        this.numberA = numberA;
        this.numberB = numberB;
        this.service = service;
        this.subaddrA = subaddrA;
        this.subaddrB = subaddrB;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a CcOptionalArg_fullArg
     * @description
     * 
     * This takes an `object` and converts it to a `CcOptionalArg_fullArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CcOptionalArg_fullArg`.
     * @returns {CcOptionalArg_fullArg}
     */
    public static _from_object (_o: { [_K in keyof (CcOptionalArg_fullArg)]: (CcOptionalArg_fullArg)[_K] }): CcOptionalArg_fullArg {
        return new CcOptionalArg_fullArg(_o.numberA, _o.numberB, _o.service, _o.subaddrA, _o.subaddrB, _o.extension);
    }


}

/**
 * @summary The Leading Root Component Types of CcOptionalArg_fullArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CcOptionalArg_fullArg: $.ComponentSpec[] = [
    new $.ComponentSpec("numberA", false, $.hasAnyTag),
    new $.ComponentSpec("numberB", false, $.hasAnyTag),
    new $.ComponentSpec("service", false, $.hasTag(_TagClass.application, 0)),
    new $.ComponentSpec("subaddrA", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("subaddrB", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 14), $.hasTag(_TagClass.context, 15)))
];

/**
 * @summary The Trailing Root Component Types of CcOptionalArg_fullArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CcOptionalArg_fullArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CcOptionalArg_fullArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CcOptionalArg_fullArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CcOptionalArg_fullArg: $.ASN1Decoder<CcOptionalArg_fullArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CcOptionalArg_fullArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CcOptionalArg_fullArg (el: _Element): CcOptionalArg_fullArg {
    if (!_cached_decoder_for_CcOptionalArg_fullArg) { _cached_decoder_for_CcOptionalArg_fullArg = function (el: _Element): CcOptionalArg_fullArg {
    let numberA!: PartyNumber;
    let numberB!: PartyNumber;
    let service!: PSS1InformationElement;
    let subaddrA: OPTIONAL<PartySubaddress>;
    let subaddrB: OPTIONAL<PartySubaddress>;
    let extension: OPTIONAL<CcExtension>;
    const callbacks: $.DecodingMap = {
        "numberA": (_el: _Element): void => { numberA = _decode_PartyNumber(_el); },
        "numberB": (_el: _Element): void => { numberB = _decode_PartyNumber(_el); },
        "service": (_el: _Element): void => { service = _decode_PSS1InformationElement(_el); },
        "subaddrA": (_el: _Element): void => { subaddrA = $._decode_explicit<PartySubaddress>(() => _decode_PartySubaddress)(_el); },
        "subaddrB": (_el: _Element): void => { subaddrB = $._decode_explicit<PartySubaddress>(() => _decode_PartySubaddress)(_el); },
        "extension": (_el: _Element): void => { extension = _decode_CcExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CcOptionalArg_fullArg,
        _extension_additions_list_spec_for_CcOptionalArg_fullArg,
        _root_component_type_list_2_spec_for_CcOptionalArg_fullArg,
        undefined,
    );
    return new CcOptionalArg_fullArg(
        numberA,
        numberB,
        service,
        subaddrA,
        subaddrB,
        extension
    );
}; }
    return _cached_decoder_for_CcOptionalArg_fullArg(el);
}

let _cached_encoder_for_CcOptionalArg_fullArg: $.ASN1Encoder<CcOptionalArg_fullArg> | null = null;

/**
 * @summary Encodes a(n) CcOptionalArg_fullArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CcOptionalArg_fullArg, encoded as an ASN.1 Element.
 */
export
function _encode_CcOptionalArg_fullArg (value: CcOptionalArg_fullArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CcOptionalArg_fullArg) { _cached_encoder_for_CcOptionalArg_fullArg = function (value: CcOptionalArg_fullArg, elGetter: $.ASN1Encoder<CcOptionalArg_fullArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.numberA, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.numberB, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.application, 0, () => _encode_PSS1InformationElement, $.BER)(value.service, $.BER));
    if (value.subaddrA !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_PartySubaddress, $.BER)(value.subaddrA, $.BER));
    }
    if (value.subaddrB !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_PartySubaddress, $.BER)(value.subaddrB, $.BER));
    }
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CcExtension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CcOptionalArg_fullArg(value, elGetter);
}


/* eslint-enable */

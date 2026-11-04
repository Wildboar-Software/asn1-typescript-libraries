#!/usr/bin/env bash

# This is just a one-shot script for me to onboard a ton of packages at once.
# I am still committing it to git history; might be useful later.
# This required temporary edits to other unrelated files in this repo.

set -euo pipefail

packages=(
    "extra-ldap-schema"
)

for pkg in "${packages[@]}"; do
  echo "Onboarding ${pkg}..."
  git checkout -b "onboard_${pkg}_6"
  npx nx g @nx/js:lib packages/${pkg} \
    --name @wildboar/${pkg} \
    --bundler=tsc \
    --linter=none \
    --unitTestRunner=vitest \
    --testEnvironment=node \
    --buildable=true \
    --compiler=tsc \
    --useProjectJson=true
  rm -rf packages/${pkg}/src/*
  echo 'export {};' > packages/${pkg}/src/index.mts
  mkdir -p packages/${pkg}/src/lib
  mkdir -p packages/${pkg}/doc
  cp ~/Downloads/asn1-compiled-to-ts/round5/${pkg}/asn1/* packages/${pkg}/doc
  cp -r ~/Downloads/asn1-compiled-to-ts/round5/${pkg}/source/modules packages/${pkg}/src/lib
  # npx organize-imports-cli packages/${pkg}/src/lib/modules
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGosaCoreRfc2307bis
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapCloudos
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapOmemo
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGfarm
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGosaCorePhpscheduleit
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapAnsible
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapTrustFabric
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration71sunAm
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapKmc
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue701StorageService
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration98nsDummyUwc
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapDnaPlugin
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapAmd
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapCommon389
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapPostfix
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapPresence
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapUser
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue603ComputingShare
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue709ToComputingService
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue703StorageAccessProtocol
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifCore
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration70sunSchema2
  npx organize-imports-cli packages/${pkg}/src/lib/modules/InetMailSchema
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue510Resource
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSubtreeAci
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue503Location
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapEregansu
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapTacacs
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration65im
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapApacheFortress
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapNfsv4
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifNadf
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapCertmap
  npx organize-imports-cli packages/${pkg}/src/lib/modules/SelectedObjectClasses
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGosaCoreGoto
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue505Domain
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapExtension
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration98obsolete
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapAci
  npx organize-imports-cli packages/${pkg}/src/lib/modules/OpenLDAP
  npx organize-imports-cli packages/${pkg}/src/lib/modules/H323-X500-Schema
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration60iplanetCalendar
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue607ApplicationEnvironment
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapValias
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapFasschema
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifMicrosoft
  npx organize-imports-cli packages/${pkg}/src/lib/modules/InetOrgPerson
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapPuppet
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue605Benchmark
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGosaCoreGofon
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapAutoMemberPlugin
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapMozilla
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldap60basev2
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapOx
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration70delgatedAdmin
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapYubi
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGosaCoreGofax
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapBase4kids2
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifRoundCube
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapIodine
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapKopano
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifPgpRecon
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldaptor
  npx organize-imports-cli packages/${pkg}/src/lib/modules/SelectedAttributeTypes
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapIpadns
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapDicom
  npx organize-imports-cli packages/${pkg}/src/lib/modules/DynGroup
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapMisc
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapRubysync
  npx organize-imports-cli packages/${pkg}/src/lib/modules/InformationFramework
  npx organize-imports-cli packages/${pkg}/src/lib/modules/MSUser
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapVmwperson
  npx organize-imports-cli packages/${pkg}/src/lib/modules/QMailSchema
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapExcisionMail
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifNis
  npx organize-imports-cli packages/${pkg}/src/lib/modules/MIXERAddressMapping
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSbac
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapPlugpen
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration50nsDelegatedAdmin
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue706StorageShareCapacity
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGosaCoreSamba3
  # npx organize-imports-cli packages/${pkg}/src/lib/modules/DNSFramework
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue507Endpoint
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration96profile
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapNisclient
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration50nsCompass
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapKitneduperson
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGosaCoreGosaSamba3
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapIspenv2
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapMailinglist
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifMicrosoftStd
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapPostfix2
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapab
  npx organize-imports-cli packages/${pkg}/src/lib/modules/AuthenticationFramework
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue609ComputingActivity
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue502Extension
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue610ToStorageService
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapDbmail
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration50iplanetServicemgt
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapPhammVacation
  npx organize-imports-cli packages/${pkg}/src/lib/modules/RFC2307bis
  npx organize-imports-cli packages/${pkg}/src/lib/modules/SambaSchema
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration50nsCalendar
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchac
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapIspenv
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGosaCoreGoserver
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapZimbra
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapNextcloud
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapJazzhands
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapCore389
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGosaCoreGotoMime
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue512Policy
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifInetorgperson
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration92freeradius
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapNsWcal
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapNsCertificate
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration55imsIcal
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration50nsMail
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapAldHostMac
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration56imsSchema
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue511Activity
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapDovecot
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldappc
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapOpendkim
  npx organize-imports-cli packages/${pkg}/src/lib/modules/PKCS-9
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapNovasun
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue608ApplicationHandle
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration89aclRights
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifApple
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapMepPlugin
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue606ExecutionEnvironment
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapWildlife
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue604ComputingManager
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapUd
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapQuota
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifPostfixBook
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapQmailNew
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue508Share
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapZimbraHsm
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue704StorageEndpoint
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifFmserver
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue506Service
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapMarathon
  npx organize-imports-cli packages/${pkg}/src/lib/modules/DSEE
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapApacheFortressRbac
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapEjbca
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapEvoldap
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapRadius
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapTuftsSchema
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapQmailuser
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifCosine
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapPosixWinsync
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifPgpRemtePrefs
  npx organize-imports-cli packages/${pkg}/src/lib/modules/RFC2739Calendar
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue705StorageShare
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue702StorageServiceCapacity
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue708DataStore
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue501Entity
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue707StorageManager
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSubentry
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration97sonia
  # npx organize-imports-cli packages/${pkg}/src/lib/modules/OrganizationAndGroupSchema
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration20subscriber
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue504Contact
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifMicrosoftExt
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue509Manager
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGosaCoreGosystem
  npx organize-imports-cli packages/${pkg}/src/lib/modules/DUAConf
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSolaris
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapEionet
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifCourier
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Ldapmigration50nsNews
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue601ComputingService
  npx organize-imports-cli packages/${pkg}/src/lib/modules/SambaV3Schema
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue602ComputingEndpoint
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapIdviews
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapGlue01Group
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapSchema2ldifSamba
  npx organize-imports-cli packages/${pkg}/src/lib/modules/LdapAmavisd
  npx organize-imports-cli packages/${pkg}/src/lib/modules/NIS
  npx organize-imports-cli packages/${pkg}/src/lib/modules/VOPerson
  npx organize-imports-cli packages/${pkg}/src/lib/modules/Thorn
  npx organize-imports-cli packages/${pkg}/src/lib/modules/ISSS-Schema
  npx organize-imports-cli packages/${pkg}/src/lib/modules/EduCourseSchema
  npx organize-imports-cli packages/${pkg}/src/lib/modules/EduMemberSchema
  npx organize-imports-cli packages/${pkg}/src/lib/modules/EduOrgSchema
  sed "s/spkac/${pkg}/" packages/spkac/project.json > packages/${pkg}/project.json
  sed "s/spkac/${pkg}/" packages/spkac/package.json > packages/${pkg}/package.json
  sed "s/spkac/${pkg}/" packages/spkac/jsr.json > packages/${pkg}/jsr.json
  sed -i 's/"version": "2.0.1"/"version": "0.1.0"/' packages/${pkg}/package.json
  sed -i 's/"version": "2.0.1"/"version": "0.1.0"/' packages/${pkg}/jsr.json
  sed "s/PKG_NAME/${pkg}/" packages/tai/README.md > packages/${pkg}/README.md
  cp packages/v59/LICENSE.txt packages/${pkg}/LICENSE.txt
  
  git add packages/${pkg}
  git add package.json
  git add package-lock.json
  git add tsconfig.json
  git commit -m "${pkg}: initial"
  git push -u origin "onboard_${pkg}_6"
  git checkout master
  gh pr create --repo Wildboar-Software/asn1-typescript-libraries --title "Onboard ${pkg}" --head onboard_${pkg}_6 --body "Onboard the \`@wildboar/${pkg}\` module." --label onboard --draft --assignee @me
done

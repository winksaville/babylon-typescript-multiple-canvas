#TSC_FLAGS += --noEmitOnError # Must be disabled because babylon.d.ts has 6 'any' type errors
TSC_FLAGS += --noUnusedLocals
TSC_FLAGS += --noUnusedParameters
TSC_FLAGS += --noIMplicitAny
TSC_FLAGS += --noImplicitReturns
TSC_FLAGS += --NoImplicitThis
TSC_FLAGS += --alwaysStrict
#TSC_FLAGS += --allowJs # is not allowed if --declaration is also set
TSC_FLAGS += --declaration
TSC_FLAGS += --experimentalDecorators
TSC_FLAGS += --forceConsistentCasingInFileNames
TSC_FLAGS += --strictNullChecks

test.js: test.ts js/babylon.2.5.d.ts Makefile
	tsc $(TSC_FLAGS) test.ts js/babylon.2.5.d.ts

.PHONY: clean
clean:
	rm test.js test.d.ts

